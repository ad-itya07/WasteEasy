import { NextResponse } from 'next/server';
import { connectDB } from '@/libs/db';
import User from '@/models/user.model';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { sendVerificationEmail } from '@/libs/email';

export async function POST(req: Request) {
  try {
    const { username, email, password } = await req.json();

    await connectDB();

    // Check if user exists
    const existingUser = await User.findOne({ $or: [{ email }, { username }] });
    if (existingUser) {
      return NextResponse.json(
        { error: 'User already exists' },
        { status: 400 }
      );
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create verification token
    const verificationToken = jwt.sign(
      { email },
      process.env.JWT_SECRET!,
      { expiresIn: '1d' }
    );

    // Create user
    const user = await User.create({
      username,
      email,
      password: hashedPassword,
      verifyToken: verificationToken,
      verifyTokenExpiry: new Date(Date.now() + 24 * 60 * 60 * 1000), // 24 hours
    });

    // Send verification email
    await sendVerificationEmail(email, verificationToken);

    return NextResponse.json({
      message: 'Registration successful. Please check your email to verify your account.',
    });
  } catch (error) {
    console.error('Registration error:', error);
    return NextResponse.json(
      { error: 'Something went wrong' },
      { status: 500 }
    );
  }
}