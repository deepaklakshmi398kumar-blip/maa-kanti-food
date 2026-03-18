import NextAuth from 'next-auth';
import CredentialsProvider from 'next-auth/providers/credentials';
import bcrypt from 'bcryptjs';

// Test user credentials are loaded from environment variables.
// Set DEMO_USER_EMAIL, DEMO_USER_NAME, and DEMO_USER_PASSWORD_HASH in .env.local.
const TEST_USER = {
  id: '1',
  name: process.env.DEMO_USER_NAME ?? 'Test User',
  email: process.env.DEMO_USER_EMAIL ?? '',
  // Fallback hash is for "password123" — override via DEMO_USER_PASSWORD_HASH in .env.local
  passwordHash:
    process.env.DEMO_USER_PASSWORD_HASH ??
    '$2a$10$N9qo8uLOickgx2ZMRZoMyeIjZAgcfl7p92ldGxad68LJZdL17lhWy',
};

const handler = NextAuth({
  providers: [
    CredentialsProvider({
      name: 'Credentials',
      credentials: {
        email: { label: 'Email', type: 'email' },
        password: { label: 'Password', type: 'password' },
      },
      async authorize(credentials) {
        if (!credentials?.email || !credentials?.password) return null;

        if (credentials.email === TEST_USER.email) {
          const isValid = await bcrypt.compare(credentials.password, TEST_USER.passwordHash);
          if (isValid) {
            return { id: TEST_USER.id, name: TEST_USER.name, email: TEST_USER.email };
          }
        }

        return null;
      },
    }),
  ],
  pages: {
    signIn: '/auth/login',
  },
  session: {
    strategy: 'jwt',
  },
  callbacks: {
    async jwt({ token, user }) {
      if (user) {
        token.id = user.id;
      }
      return token;
    },
    async session({ session, token }) {
      if (session.user) {
        (session.user as { id?: string }).id = token.id as string;
      }
      return session;
    },
  },
});

export { handler as GET, handler as POST };
