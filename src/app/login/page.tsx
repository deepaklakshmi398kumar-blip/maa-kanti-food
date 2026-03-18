'use client';

import { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { Button } from '@/components/common/Button';

export default function LoginPage() {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState('');
  const [rememberMe, setRememberMe] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    setError('');

    try {
      const response = await fetch('/api/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData),
      });

      const data = await response.json();

      if (!response.ok) {
        setError(data.error || 'Login failed');
        return;
      }

      // Save tokens
      localStorage.setItem('access_token', data.accessToken);
      localStorage.setItem('refresh_token', data.refreshToken);

      if (rememberMe) {
        localStorage.setItem('rememberMe', 'true');
      }

      // Redirect to home
      router.push('/');
    } catch (err) {
      setError('An error occurred. Please try again.');
      console.error(err);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-gradient-to-br from-cream to-golden-50 dark:from-dark dark:to-brown-800 pt-8">
      <div className="container-custom max-w-md">
        <div className="rounded-2xl bg-white p-8 shadow-lg dark:bg-brown-700">
          {/* Header */}
          <div className="mb-8 text-center">
            <h1 className="mb-2">Welcome Back</h1>
            <p className="text-sm text-gray-600 dark:text-gray-300">
              Log in to access your account and continue shopping
            </p>
          </div>

          {/* Error Message */}
          {error && (
            <div className="mb-6 rounded-lg bg-red-100 p-4 text-sm text-red-700 dark:bg-red-900/20 dark:text-red-400">
              {error}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-4">
            {/* Email */}
            <div>
              <label className="block text-sm font-medium mb-2">Email</label>
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-brown-600 dark:bg-brown-800"
                placeholder="you@example.com"
                required
              />
            </div>

            {/* Password */}
            <div>
              <div className="mb-2 flex items-center justify-between">
                <label className="block text-sm font-medium">Password</label>
                <Link
                  href="/forgot-password"
                  className="text-xs text-golden-500 hover:text-golden-600"
                >
                  Forgot password?
                </Link>
              </div>
              <input
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                className="w-full rounded-lg border border-gray-300 px-4 py-2 dark:border-brown-600 dark:bg-brown-800"
                placeholder="••••••••"
                required
              />
            </div>

            {/* Remember Me */}
            <label className="flex items-center gap-2">
              <input
                type="checkbox"
                checked={rememberMe}
                onChange={(e) => setRememberMe(e.target.checked)}
                className="rounded"
              />
              <span className="text-sm text-gray-600 dark:text-gray-300">
                Remember me for 30 days
              </span>
            </label>

            {/* Submit Button */}
            <Button
              type="submit"
              isLoading={isLoading}
              fullWidth
              className="mt-6"
            >
              Log In
            </Button>
          </form>

          {/* Divider */}
          <hr className="my-6 border-gray-300 dark:border-brown-600" />

          {/* Signup Link */}
          <p className="text-center text-sm text-gray-600 dark:text-gray-300">
            Don't have an account?{' '}
            <Link
              href="/signup"
              className="font-semibold text-golden-500 hover:text-golden-600"
            >
              Sign up here
            </Link>
          </p>
        </div>
      </div>
    </main>
  );
}
