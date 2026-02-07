import { NextRequest, NextResponse } from "next/server";
import { hashPassword, generateToken, setTokenCookie } from "@/lib/auth";
import { getUsersCollection } from "@/lib/mongodb";

export async function POST(request: NextRequest) {
  try {
    const { email, password, name } = await request.json();

    // Validate input
    if (!email || !password) {
      return NextResponse.json(
        { error: "Email and password are required" },
        { status: 400 },
      );
    }

    // Email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: "Invalid email format" },
        { status: 400 },
      );
    }

    // Password validation
    if (password.length < 8) {
      return NextResponse.json(
        { error: "Password must be at least 8 characters" },
        { status: 400 },
      );
    }

    const usersCollection = await getUsersCollection();

    // Check if user exists
    const existingUser = await usersCollection.findOne({ email });
    if (existingUser) {
      return NextResponse.json(
        { error: "User already exists" },
        { status: 400 },
      );
    }

    // Hash password
    const hashedPassword = await hashPassword(password);

    // Create user
    const result = await usersCollection.insertOne({
      email,
      password: hashedPassword,
      name,
      createdAt: new Date(),
      updatedAt: new Date(),
    });

    // Generate token
    const token = generateToken({
      userId: result.insertedId.toString(),
      email,
      name: name || "",
    });

    // Create response
    const response = NextResponse.json(
      {
        success: true,
        user: {
          id: result.insertedId.toString(),
          email,
          name,
        },
      },
      { status: 201 },
    );

    // Set cookie
    return setTokenCookie(response, token);
  } catch (error) {
    console.error("Signup error:", error);
    return NextResponse.json(
      { error: "Internal server error" },
      { status: 500 },
    );
  }
}
