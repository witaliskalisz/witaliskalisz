import { NextResponse } from "next/server";
import { z } from "zod";

const schema = z.object({
  packageSlug: z.string(),
  date: z.string(),
  time: z.string(),
  name: z.string().min(2),
  email: z.string().email(),
  phone: z.string().min(9),
  notes: z.string().optional(),
  consent: z.boolean(),
});

export async function POST(req: Request) {
  try {
    const body = await req.json();
    const data = schema.parse(body);
    // TODO: send confirmation email + persist in DB; alert mama via SMS or email.
    console.info("[booking] received", data);
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("[booking] error", err);
    return NextResponse.json({ ok: false }, { status: 400 });
  }
}
