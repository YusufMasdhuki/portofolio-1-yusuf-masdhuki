import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = (await req.json()) as {
      name: string;
      email: string;
      message: string;
    };

    const html = `
      <h2>New Contact</h2>
      <p><b>Name:</b> ${name}</p>
      <p><b>Email:</b> ${email}</p>
      <p><b>Message:</b> ${(message ?? '').replace(/\n/g, '<br>')}</p>
      `;

    const { data, error } = await resend.emails.send({
      from: 'Contact <onboarding@resend.dev>',
      to: process.env.CONTACT_TO!,
      subject: `New inquiry from ${name}`,
      replyTo: email,
      html,
    });

    if (error) {
      return new Response(JSON.stringify({ ok: false, error: error.message }), {
        status: 400,
      });
    }

    return Response.json({ ok: true, id: data?.id });
  } catch (e: any) {
    return new Response(
      JSON.stringify({ ok: false, error: e?.message ?? 'unknown error' }),
      { status: 400 }
    );
  }
}
