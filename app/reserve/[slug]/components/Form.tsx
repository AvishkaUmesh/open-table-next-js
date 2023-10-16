'use client';
import useReservation from '@/hooks/useReservation';
import { CircularProgress } from '@mui/material';
import { useEffect, useState } from 'react';

function Form({
  slug,
  date,
  partySize,
}: {
  slug: string;
  date: string;
  partySize: string;
}) {
  const [inputs, setInputs] = useState({
    bookerFirstName: '',
    bookerLastName: '',
    bookerPhone: '',
    bookerEmail: '',
    bookerOccasion: '',
    bookerRequest: '',
  });

  const [day, time] = date.split('T');
  const [didBook, setDidBook] = useState(false);
  const [disabled, setDisabled] = useState(true);
  const { error, loading, createReservation } = useReservation();

  useEffect(() => {
    if (
      inputs.bookerFirstName &&
      inputs.bookerLastName &&
      inputs.bookerPhone &&
      inputs.bookerEmail
    ) {
      setDisabled(false);
    } else {
      setDisabled(true);
    }
  }, [inputs]);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInputs((inputs) => ({
      ...inputs,
      [e.target.name]: e.target.value,
    }));
  };

  const handleSubmit = async () => {
    await createReservation({
      slug,
      partySize,
      time,
      day,
      bookerFirstName: inputs.bookerFirstName,
      bookerLastName: inputs.bookerLastName,
      bookerEmail: inputs.bookerEmail,
      bookerOccasion: inputs.bookerOccasion,
      bookerPhone: inputs.bookerPhone,
      bookerRequest: inputs.bookerRequest,
      setDidBook,
    });
  };

  return (
    <div className="mt-10 flex w-[660px] flex-wrap justify-between">
      {didBook && (
        <div>
          <h1>You are all booked up</h1>
          <p>Enjoy your reservation</p>
        </div>
      )}

      {!didBook && (
        <>
          {error && (
            <p className="m-5 w-full border border-red-300 bg-red-200 p-2 text-center text-red-600">
              {error}
            </p>
          )}
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="First name"
            name="bookerFirstName"
            value={inputs.bookerFirstName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Last name"
            name="bookerLastName"
            value={inputs.bookerLastName}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Phone number"
            name="bookerPhone"
            value={inputs.bookerPhone}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Email"
            name="bookerEmail"
            value={inputs.bookerEmail}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Occasion (optional)"
            name="bookerOccasion"
            value={inputs.bookerOccasion}
            onChange={handleInputChange}
          />
          <input
            type="text"
            className="mb-4 w-80 rounded border p-3"
            placeholder="Requests (optional)"
            name="bookerRequest"
            value={inputs.bookerRequest}
            onChange={handleInputChange}
          />
          <button
            className="w-full rounded bg-red-600 p-3 font-bold text-white disabled:bg-gray-300"
            disabled={disabled}
            onClick={handleSubmit}
          >
            {loading ? (
              <CircularProgress color="inherit" />
            ) : (
              'Complete reservation'
            )}
          </button>
          <p className="mt-4 text-sm">
            By clicking “Complete reservation” you agree to the OpenTable Terms
            of Use and Privacy Policy. Standard text message rates may apply.
            You may opt out of receiving text messages at any time.
          </p>{' '}
        </>
      )}
    </div>
  );
}
export default Form;
