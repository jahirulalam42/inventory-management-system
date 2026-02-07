import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import { serialize, parse } from "cookie";
import { ObjectId } from "mongodb";

const JWT_SECRET =
  process.env.JWT_SECRET || "your-secret-key-change-in-production";
const TOKEN_NAME = "auth_token";

export interface UserPayload {
  userId: string;
  email: string;
  name?: string;
}

// Hash password
export async function hashPassword(password: string): Promise<string> {
  return await bcrypt.hash(password, 12);
}

// Compare password
export async function comparePassword(
  password: string,
  hashedPassword: string,
): Promise<boolean> {
  return await bcrypt.compare(password, hashedPassword);
}

// Generate JWT token
export function generateToken(payload: UserPayload): string {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "7d" });
}

// Verify JWT token
export function verifyToken(token: string): UserPayload | null {
  try {
    return jwt.verify(token, JWT_SECRET) as UserPayload;
  } catch (error) {
    return null;
  }
}

// Set cookie
export function setTokenCookie(res: any, token: string) {
  const cookie = serialize(TOKEN_NAME, token, {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: 60 * 60 * 24 * 7, // 7 days
    path: "/",
  });

  res.headers.append("Set-Cookie", cookie);
  return res;
}

// Parse cookies
export function parseCookies(req: Request) {
  const cookieHeader = req.headers.get("cookie") || "";
  return parse(cookieHeader);
}

// Get token from request
export function getTokenFromRequest(req: Request): string | null {
  const cookies = parseCookies(req);
  return cookies[TOKEN_NAME] || null;
}

// Clear cookie (logout)
export function clearTokenCookie(res: any) {
  const cookie = serialize(TOKEN_NAME, "", {
    httpOnly: true,
    secure: process.env.NODE_ENV === "production",
    sameSite: "lax",
    maxAge: -1, // Expire immediately
    path: "/",
  });

  res.headers.append("Set-Cookie", cookie);
  return res;
}
