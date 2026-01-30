import { NextResponse } from "next/server";

// Brevo (formerly Sendinblue) API integration
// Set BREVO_API_KEY in your .env.local or Vercel environment variables
const BREVO_API_KEY = process.env.BREVO_API_KEY || "";
const BREVO_LIST_ID = parseInt(process.env.BREVO_LIST_ID || "2"); // Default list ID

export async function POST(request: Request) {
  try {
    const { email } = await request.json();

    if (!email || !email.includes("@")) {
      return NextResponse.json(
        { error: "Please provide a valid email address." },
        { status: 400 }
      );
    }

    // If Brevo API key is not set, just log and return success (dev mode)
    if (!BREVO_API_KEY) {
      console.log(`[Newsletter] New subscriber: ${email} (Brevo not configured)`);
      return NextResponse.json({ success: true, message: "Subscribed (dev mode)" });
    }

    // Create/update contact in Brevo
    const res = await fetch("https://api.brevo.com/v3/contacts", {
      method: "POST",
      headers: {
        "api-key": BREVO_API_KEY,
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        email,
        listIds: [BREVO_LIST_ID],
        updateEnabled: true,
        attributes: {
          SOURCE: "futures-landing-page",
        },
      }),
    });

    if (res.ok || res.status === 201 || res.status === 204) {
      return NextResponse.json({ success: true });
    }

    // Handle duplicate contact (already subscribed)
    if (res.status === 400) {
      const data = await res.json().catch(() => ({}));
      if (data.code === "duplicate_parameter") {
        return NextResponse.json({ success: true, message: "Already subscribed" });
      }
    }

    console.error(`Brevo API error: ${res.status}`, await res.text().catch(() => ""));
    return NextResponse.json(
      { error: "Failed to subscribe. Please try again." },
      { status: 500 }
    );
  } catch (error) {
    console.error("Newsletter API error:", error);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
