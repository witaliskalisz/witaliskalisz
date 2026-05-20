import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  topic: z.string(),
  message: z.string().optional(),
  consent: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    // TODO: integrate Resend / Brevo email + persist in DB.
    // Example placeholder:
    console.info("[lead] received", {
      ...data,
      receivedAt: new Date().toISOString(),
    });
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[lead] error", err);
    return NextResponse.json({ ok: false, error: "Invalid payload" }, { status: 400 });
  }
}
