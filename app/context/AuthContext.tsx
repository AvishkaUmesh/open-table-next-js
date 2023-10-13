'use client';

import { createContext, useState } from 'react';

interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  city: string;
}

interface State {
  loading: boolean;
  user: User | null;
  errors: string[] | null;
}

interface AuthState extends State {
  setAuthState: React.Dispatch<React.SetStateAction<State>>;
}

export const AuthenticationContext = createContext<AuthState>({
  loading: false,
  user: null,
  errors: null,
  setAuthState: () => {},
});

function AuthContext({ children }: { children: React.ReactNode }) {
  const [authState, setAuthState] = useState<State>({
    loading: false,
    user: null,
    errors: null,
  });

  return (
    <AuthenticationContext.Provider
      value={{
        ...authState,
        setAuthState,
      }}
    >
      {children}
    </AuthenticationContext.Provider>
  );
}
export default AuthContext;
