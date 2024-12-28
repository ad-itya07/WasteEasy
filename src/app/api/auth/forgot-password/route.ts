import { NextResponse } from 'next/server';
import { connectDB } from '@/libs/db';
import User from '@/models/user.model';
import jwt from 'jsonwebtoken';
import { sendPasswordResetEmail } from '@/libs/email';

export async function POST(req: Request) {
  try {
    const { email } = await req.json();

    await connectDB();

    const user = await User.findOne({ email });
    if (!user) {
      return NextResponse.json(
        { error: 'User not found' },
        { status: 404 }
      );
    }

    const resetToken = jwt.sign(
      { email },
      process.env.JWT_SECRET!,
      { expiresIn: '1h' }
    );

    user.forgotPasswordToken = resetToken;
    user.forgotPasswordTokenExpiry = new Date(Date.now() + 60 * 60 * 1000); // 1 hour
    await user.save();

    await sendPasswordResetEmail(email, resetToken);

    return NextResponse.json({
      message: 'Password reset email sent',
    });
  } catch (error) {
    console.error('Forgot password error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}