'use client';

import axios from 'axios';
import { getCookie } from 'cookies-next';
import { createContext, useEffect, useState } from 'react';

const API_URL = 'http://localhost:3000/api/auth';

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

  useEffect(() => {
    const fetchUser = async () => {
      setAuthState({ user: null, errors: null, loading: true });

      try {
        const jwt = getCookie('jwt');

        if (!jwt) {
          setAuthState({ user: null, errors: null, loading: false });
          return;
        }

        const response = await axios.get(`${API_URL}/me`, {
          headers: {
            Authorization: `Bearer ${jwt}`,
          },
        });

        axios.defaults.headers.common['Authorization'] = `Bearer ${jwt}`;

        setAuthState({ user: response.data, errors: null, loading: false });
      } catch (error: unknown) {
        if (axios.isAxiosError(error)) {
          console.log(error.response?.data.message);
          setAuthState({
            user: null,
            errors: error.response?.data.message,
            loading: false,
          });
        }
      }
    };

    fetchUser();
  }, []);

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
