import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

// A/B Test: Hero headline variants
// Variant A (default): "The Only Prop Firm With Full Static Drawdown"
// Variant B: "Stop Losing Money to Trailing Drawdown"
const COOKIE_NAME = "ty-ab-variant";

export function middleware(request: NextRequest) {
  const response = NextResponse.next();

  // Check if user already has a variant assigned
  const existingVariant = request.cookies.get(COOKIE_NAME)?.value;

  if (!existingVariant) {
    // Assign 50/50 split
    const variant = Math.random() < 0.5 ? "A" : "B";
    response.cookies.set(COOKIE_NAME, variant, {
      maxAge: 60 * 60 * 24 * 30, // 30 days
      path: "/",
      sameSite: "lax",
    });
  }

  return response;
}

export const config = {
  matcher: "/",
};
