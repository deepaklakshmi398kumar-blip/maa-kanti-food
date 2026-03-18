import jwt from 'jsonwebtoken';
import bcryptjs from 'bcryptjs';

const JWT_SECRET = process.env.JWT_SECRET || 'your-secret-key-change-in-production';
const JWT_EXPIRY = '1h';
const JWT_REFRESH_EXPIRY = '7d';

export interface DecodedToken {
  id: number;
  email: string;
  iat: number;
  exp: number;
}

// Generate JWT Token
export function generateToken(userId: number, email: string): string {
  return jwt.sign({ id: userId, email }, JWT_SECRET, {
    expiresIn: JWT_EXPIRY,
  });
}

// Generate Refresh Token
export function generateRefreshToken(userId: number, email: string): string {
  return jwt.sign({ id: userId, email }, JWT_SECRET, {
    expiresIn: JWT_REFRESH_EXPIRY,
  });
}

// Verify Token
export function verifyToken(token: string): DecodedToken | null {
  try {
    return jwt.verify(token, JWT_SECRET) as DecodedToken;
  } catch {
    return null;
  }
}

// Hash Password
export async function hashPassword(password: string): Promise<string> {
  const salt = await bcryptjs.genSalt(10);
  return bcryptjs.hash(password, salt);
}

// Compare Passwords
export async function comparePasswords(
  password: string,
  hash: string
): Promise<boolean> {
  return bcryptjs.compare(password, hash);
}

// Validate Password Strength
export function validatePasswordStrength(password: string): {
  isValid: boolean;
  strength: 'weak' | 'medium' | 'strong';
  feedback: string[];
} {
  const feedback: string[] = [];
  let strength: 'weak' | 'medium' | 'strong' = 'weak';

  if (password.length < 8) {
    feedback.push('Password should be at least 8 characters long');
  } else if (password.length < 12) {
    strength = 'medium';
  } else {
    strength = 'strong';
  }

  if (!/[A-Z]/.test(password)) {
    feedback.push('Add uppercase letters (A-Z)');
  }
  if (!/[a-z]/.test(password)) {
    feedback.push('Add lowercase letters (a-z)');
  }
  if (!/[0-9]/.test(password)) {
    feedback.push('Add numbers (0-9)');
  }
  if (!/[!@#$%^&*]/.test(password)) {
    feedback.push('Add special characters (!@#$%^&*)');
  }

  if (strength === 'medium' && feedback.length === 0) {
    strength = 'medium';
  } else if (strength === 'weak' && feedback.length > 0) {
    strength = 'weak';
  } else if (feedback.length === 0) {
    strength = 'strong';
  }

  return {
    isValid: feedback.length === 0,
    strength,
    feedback,
  };
}

// Is Token Expired
export function isTokenExpired(token: string): boolean {
  const decoded = verifyToken(token);
  if (!decoded) return true;
  return new Date(decoded.exp * 1000) < new Date();
}
