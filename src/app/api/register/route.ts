import { NextResponse } from 'next/server';
import bcrypt from 'bcryptjs';

// In-memory user store for demo purposes.
// A production implementation would use a persistent database (e.g. Postgres, MongoDB).
const registeredUsers: Array<{ id: string; name: string; email: string; passwordHash: string }> = [];

export async function POST(request: Request) {
  try {
    const body = (await request.json()) as { name?: string; email?: string; password?: string };
    const { name, email, password } = body;

    if (!name || !email || !password) {
      return NextResponse.json({ error: 'All fields are required' }, { status: 400 });
    }

    if (password.length < 6) {
      return NextResponse.json(
        { error: 'Password must be at least 6 characters' },
        { status: 400 }
      );
    }

    const exists = registeredUsers.some((u) => u.email === email);
    if (exists) {
      return NextResponse.json({ error: 'Email already registered' }, { status: 409 });
    }

    const passwordHash = await bcrypt.hash(password, 10);
    const newUser = { id: String(registeredUsers.length + 2), name, email, passwordHash };
    registeredUsers.push(newUser);

    return NextResponse.json({ message: 'Account created successfully' }, { status: 201 });
  } catch {
    return NextResponse.json({ error: 'Internal server error' }, { status: 500 });
  }
}
