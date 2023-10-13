'use client';

import useAuth from '@/hooks/useAuth';
import { Alert, CircularProgress } from '@mui/material';
import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import { useContext, useEffect, useState } from 'react';
import { AuthenticationContext } from '../context/AuthContext';
import AuthModalInputs from './AuthModalInputs';

const style = {
  position: 'absolute' as const,
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 500,
  bgcolor: 'background.paper',
  boxShadow: 24,
  p: 4,
};

export interface AuthModalInputsProps {}

export default function AuthModal({ isSignIn }: { isSignIn: boolean }) {
  const [open, setOpen] = useState(false);
  const handleOpen = () => setOpen(true);
  const handleClose = () => setOpen(false);

  const [inputs, setInputs] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    city: '',
    password: '',
  });
  const [disabled, setDisabled] = useState(true);
  const { signIn } = useAuth();
  const { errors, loading } = useContext(AuthenticationContext);

  useEffect(() => {
    if (isSignIn) {
      setDisabled(!inputs.email || !inputs.password);
    } else {
      setDisabled(
        !inputs.firstName ||
          !inputs.lastName ||
          !inputs.email ||
          !inputs.phone ||
          !inputs.city ||
          !inputs.password
      );
    }
  }, [inputs, isSignIn]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs({ ...inputs, [e.target.name]: e.target.value });
  };

  const onSubmitHandler = async () => {
    if (isSignIn) {
      await signIn(
        { email: inputs.email, password: inputs.password },
        handleClose
      );
    } else {
      // await signUp(inputs);
    }
  };

  const renderContent = (signInContent: string, signUpContent: string) => {
    return isSignIn ? signInContent : signUpContent;
  };

  return (
    <div>
      <button
        className={`${renderContent(
          'bg-blue-400 text-white',
          ''
        )} mr-3 rounded border  p-1 px-4`}
        onClick={handleOpen}
      >
        {renderContent('Sign In', 'Sign Up')}
      </button>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          {loading && (
            <div className="flex justify-center p-2">
              <CircularProgress />
            </div>
          )}

          {!loading && (
            <div className="p-2">
              <div className="mb-2 border-b pb-2 text-center font-bold uppercase">
                <p className="text-sm">
                  {renderContent('Sign In', 'create account')}
                </p>
              </div>
              <div className="m-auto">
                <h2 className="font text-center text-2xl">
                  {renderContent(
                    'Log Into Your Account',
                    'Create Your OpenTable Account'
                  )}
                </h2>
                {errors && (
                  <div className="pb-1 pt-3">
                    {errors.map((error, index) => (
                      <Alert key={index} severity="error">
                        {error}
                      </Alert>
                    ))}
                  </div>
                )}
                <AuthModalInputs
                  inputs={inputs}
                  inputHandler={handleInputChange}
                  isSignIn={isSignIn}
                />

                <button
                  className="mb-5 w-full rounded bg-red-600 p-3 text-sm uppercase text-white disabled:bg-gray-400"
                  disabled={disabled}
                  onClick={onSubmitHandler}
                >
                  {renderContent('Sign In', 'create account')}
                </button>
              </div>
            </div>
          )}
        </Box>
      </Modal>
    </div>
  );
}
