'use client';

import React, { createContext, useContext, useState } from 'react';

interface AuthContextType {
  isLoading: boolean;
}

const AuthContext = createContext<AuthContextType>({ isLoading: false });

export function AuthProvider({ children }: { children: React.ReactNode }) {
  // isLoading is a placeholder for future async auth operations (e.g., session hydration)
  const [isLoading] = useState(false);
  return (
    <AuthContext.Provider value={{ isLoading }}>
      {children}
    </AuthContext.Provider>
  );
}

export function useAuth() {
  return useContext(AuthContext);
}
