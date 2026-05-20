import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  email: z.string().email(),
  consent: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    // TODO: subscribe via Brevo/Resend/MailerLite/Substack.
    console.info("[newsletter] subscribed", data.email);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[newsletter] error", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
