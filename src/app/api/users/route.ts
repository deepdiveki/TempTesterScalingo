import { NextResponse } from 'next/server';
import prisma from '@/lib/prisma'; // Ensure you have a reusable Prisma instance

export async function GET() {
  try {
    // Query all users
    const users = await prisma.user.findMany();

    // Return the users as JSON
    return NextResponse.json({ users });
  } catch (error: any) {
    console.error('Database Error:', error);
    return NextResponse.json({ error: error.message }, { status: 500 });
  }
}
