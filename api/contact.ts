// Vercel serverless function: POST /api/contact
// Sends the contact-form message to info@technektar.com via Resend
// (same transactional-mail pattern as the neo-fm notify function).
// Requires RESEND_API_KEY in the Vercel project environment.
export const config = { runtime: 'edge' };

const TO = 'info@technektar.com';
const FROM = process.env.CONTACT_FROM ?? 'TechNektar Website <noreply@technektar.com>';

export default async function handler(req: Request): Promise<Response> {
  if (req.method !== 'POST') {
    return json({ error: 'method not allowed' }, 405);
  }
  let body: { name?: string; email?: string; message?: string; company?: string };
  try {
    body = await req.json();
  } catch {
    return json({ error: 'invalid json' }, 400);
  }
  // Honeypot: real users never fill "company".
  if (body.company) return json({ ok: true });

  const name = (body.name ?? '').trim().slice(0, 200);
  const email = (body.email ?? '').trim().slice(0, 200);
  const message = (body.message ?? '').trim().slice(0, 5000);
  if (!name || !message || !/^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(email)) {
    return json({ error: 'missing or invalid fields' }, 400);
  }

  const key = process.env.RESEND_API_KEY;
  if (!key) return json({ error: 'mail service not configured' }, 503);

  const res = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: { Authorization: `Bearer ${key}`, 'Content-Type': 'application/json' },
    body: JSON.stringify({
      from: FROM,
      to: [TO],
      reply_to: email,
      subject: `Website enquiry from ${name}`,
      text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
    }),
  });
  if (!res.ok) {
    const detail = await res.text().catch(() => '');
    console.error('resend failed', res.status, detail);
    return json({ error: 'send failed' }, 502);
  }
  return json({ ok: true });
}

function json(data: unknown, status = 200): Response {
  return new Response(JSON.stringify(data), {
    status,
    headers: { 'Content-Type': 'application/json' },
  });
}
