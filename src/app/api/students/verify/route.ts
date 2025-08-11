import { NextRequest, NextResponse } from 'next/server';
import dbConnect from '@/lib/db';
import User from '@/models/User';

export async function POST(req: NextRequest) {
  await dbConnect();

  try {
    const { studentId } = await req.json();

    if (!studentId) {
        return NextResponse.json({ message: 'Student ID is required' }, { status: 400 });
    }

    const updatedUser = await User.findByIdAndUpdate(studentId, { status: 'verified' }, { new: true });

    if (!updatedUser) {
        return NextResponse.json({ message: 'Student not found' }, { status: 404 });
    }

    return NextResponse.json({ message: 'Student verified successfully', user: updatedUser }, { status: 200 });
  } catch (error) {
    console.error('Verification error:', error);
    return NextResponse.json({ message: 'An internal server error occurred' }, { status: 500 });
  }
}
