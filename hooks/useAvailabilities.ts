import axios from 'axios';
import { useState } from 'react';

export default function useAvailabilities() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const [data, setData] = useState<
    { time: string; available: boolean }[] | null
  >(null);

  const fetchAvailabilities = async ({
    slug,
    partySize,
    day,
    time,
  }: {
    slug: string;
    partySize: string;
    day: string;
    time: string;
  }) => {
    setLoading(true);

    try {
      const response = await axios.get(
        `http://localhost:3000/api/restaurant/${slug}/availability`,
        {
          params: {
            day,
            time,
            partySize,
          },
        }
      );
      setLoading(false);
      setData(response.data);
    } catch (error: unknown) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        setError('Something went wrong');
      }
    }
  };

  return { loading, data, error, fetchAvailabilities };
}
