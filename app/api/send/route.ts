import { NextRequest, NextResponse } from "next/server";
import { EmailCreated } from "../../emails/EmailCreated";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, email, message } = body;

    if (!name) {
      return NextResponse.json({ error: "name is required" }, { status: 400 });
    }

    if (!name || typeof name !== "string" || name.trim().length < 3) {
      return NextResponse.json(
        { error: "❌ The name must contain at least 3 characters!" },
        { status: 400 }
      );
    }

    if (!email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      return NextResponse.json(
        { error: "❌ Please enter a valid email!" },
        { status: 400 }
      );
    }

    if (!message || typeof message !== "string" || message.trim().length < 5) {
      return NextResponse.json(
        { error: "❌ The message must contain at least 5 characters!" },
        { status: 400 }
      );
    }
    if (phone && (typeof phone !== "string" || phone.trim() === "")) {
      return NextResponse.json(
        { error: "❌ Phone must be a valid string!" },
        { status: 400 }
      );
    }

    console.log("✅ The data has been validated:", {
      name,
      email,
      message,
      phone,
    });

    console.log(`Email Delivered: ${name} ${phone} ${email} ${message}`);

    await resend.emails.send({
      from: "onboarding@resend.dev",
      to: "vladimirboychuk@gmail.com",
      subject: "Hello from Resend!",
      react: EmailCreated({ name, email, message, phone }),
    });

    return NextResponse.json(
      { message: "The letter was sent successfully!" },
      { status: 200 }
    );
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
  } catch (error) {
    return NextResponse.json(
      { error: "Request processing error" },
      { status: 500 }
    );
  }
}
