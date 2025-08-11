import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function GET(req: NextRequest) {
  await dbConnect();

  try {
    const students = await User.find({ status: 'unverified', role: 'student' }).select('name email status');
    return NextResponse.json(students, { status: 200 });
  } catch (error) {
    console.error('Failed to fetch pending students:', error);
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}
