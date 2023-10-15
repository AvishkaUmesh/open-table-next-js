'use client';
import useAvailabilities from '@/hooks/useAvailabilities';
import { Time, convertToDisplayTime } from '@/utils/convertToDisplayTime';
import { CircularProgress } from '@mui/material';
import Link from 'next/link';
import { useState } from 'react';
import DatePicker from 'react-datepicker';
import { partySize as partySizes, times } from '../../../../data';

function ReservationCard({
  openTime,
  closeTime,
  slug,
}: {
  openTime: string;
  closeTime: string;
  slug: string;
}) {
  const { data, loading, fetchAvailabilities } = useAvailabilities();
  const [selectedDate, setSelectedDate] = useState<Date | null>(new Date());
  const [time, setTime] = useState(openTime);
  const [partySize, setPartySize] = useState('2');
  const [day, setDay] = useState(new Date().toISOString().split('T')[0]);

  const handleDateChange = (date: Date | null) => {
    if (date) {
      setDay(date.toISOString().split('T')[0]);
      setSelectedDate(date);
    } else {
      setSelectedDate(null);
    }
  };

  const handleFindTime = () => {
    fetchAvailabilities({
      slug,
      day,
      time,
      partySize,
    });
  };

  const filterTimes = () => {
    const timesInWindow: typeof times = [];

    let isWithinWindow = false;

    times.forEach((time) => {
      if (time.time === openTime) {
        isWithinWindow = true;
      }

      if (isWithinWindow) {
        timesInWindow.push(time);
      }

      if (time.time === closeTime) {
        isWithinWindow = false;
      }
    });

    return timesInWindow;
  };

  return (
    <div className="fixed w-[15%] rounded bg-white p-3 shadow">
      <div className="border-b pb-2 text-center font-bold">
        <h4 className="mr-7 text-lg">Make a Reservation</h4>
      </div>
      <div className="my-3 flex flex-col">
        <label htmlFor="">Party size</label>
        <select
          name=""
          className="border-b py-3 font-light"
          id=""
          value={partySize}
          onChange={(e) => setPartySize(e.target.value)}
        >
          {partySizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>
      <div className="flex justify-between">
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Date</label>
          <DatePicker
            className="w-24 border-b py-3 text-reg font-light"
            dateFormat="MMMM d"
            wrapperClassName="w-[48%]"
            selected={selectedDate}
            onChange={(date) => {
              handleDateChange(date);
            }}
          />
        </div>
        <div className="flex w-[48%] flex-col">
          <label htmlFor="">Time</label>
          <select
            name=""
            id=""
            className="border-b py-3 font-light"
            value={time}
            onChange={(e) => setTime(e.target.value)}
          >
            {filterTimes().map((time, index) => (
              <option key={index} value={time.time}>
                {time.displayTime}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div className="mt-5">
        <button
          className="h-16 w-full rounded bg-red-600 px-4 font-bold text-white"
          onClick={handleFindTime}
          disabled={loading}
        >
          {loading && <CircularProgress color="inherit" />}
          {!loading && 'Find a Time'}
        </button>
      </div>
      {data && data.length && (
        <div className="mt-4">
          <p className="text-reg">Select a Time</p>
          <div className="mt-2 flex flex-wrap">
            {data.map((time) => {
              return time.available ? (
                <Link
                  key={time.time}
                  href={`/reserve/${slug}?date=${day}T${time.time}&partySize=${partySize}`}
                  className="mb-3 mr-3 w-24 cursor-pointer rounded bg-red-600 p-2 text-center text-white"
                >
                  <p className="text-sm font-bold">
                    {convertToDisplayTime(time.time as Time)}
                  </p>
                </Link>
              ) : (
                <p
                  key={time.time}
                  className="mb-3 mr-3 w-24 rounded bg-gray-300 p-2"
                ></p>
              );
            })}
          </div>
        </div>
      )}
    </div>
  );
}
export default ReservationCard;
