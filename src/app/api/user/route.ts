import { NextResponse } from 'next/server';

export async function GET() {
  return NextResponse.json({
    name: "Sachin Kumar",
    referralCode: "sachin2025",
    totalRaised: 7800,
  });
}
