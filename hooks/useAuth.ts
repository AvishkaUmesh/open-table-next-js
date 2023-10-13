import { AuthenticationContext } from '@/app/context/AuthContext';
import axios from 'axios';
import { useContext } from 'react';
const API_URL = 'http://localhost:3000/api/auth';

const useAuth = () => {
  const { setAuthState } = useContext(AuthenticationContext);

  const signIn = async (
    {
      email,
      password,
    }: {
      email: string;
      password: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({ user: null, errors: null, loading: true });
    try {
      const response = await axios.post(`${API_URL}/signin`, {
        email,
        password,
      });
      setAuthState({ user: response.data, errors: null, loading: false });
      handleClose();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setAuthState({
          user: null,
          errors: error.response?.data.errors,
          loading: false,
        });
      }
    }
  };
  const signUp = async (
    {
      email,
      password,
      firstName,
      lastName,
      phone,
      city,
    }: {
      email: string;
      password: string;
      firstName: string;
      lastName: string;
      phone: string;
      city: string;
    },
    handleClose: () => void
  ) => {
    setAuthState({ user: null, errors: null, loading: true });

    try {
      const response = await axios.post(`${API_URL}/signup`, {
        email,
        password,
        firstName,
        lastName,
        phone,
        city,
      });

      setAuthState({ user: response.data, errors: null, loading: false });
      handleClose();
    } catch (error: unknown) {
      if (axios.isAxiosError(error)) {
        setAuthState({
          user: null,
          errors: error.response?.data.errors,
          loading: false,
        });
      }
    }
  };

  return {
    signIn,
    signUp,
  };
};

export default useAuth;
