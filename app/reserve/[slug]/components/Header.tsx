import { Time, convertToDisplayTime } from '@/utils/convertToDisplayTime';

import { format } from 'date-fns';

function Header({
  image,
  name,
  date,
  partySize,
}: {
  image: string;
  name: string;
  date: string;
  partySize: string;
}) {
  const [day, time] = date.split('T');

  return (
    <div>
      <h3 className="font-bold">You&apos;re almost done!</h3>
      <div className="mt-5 flex">
        <img src={image} alt="" className="h-18 w-32 rounded" />
        <div className="ml-4">
          <h1 className="text-3xl font-bold">{name}</h1>
          <div className="mt-3 flex">
            <p className="mr-6">{format(new Date(day), 'ccc, LLL d')}</p>
            <p className="mr-6">{convertToDisplayTime(time as Time)}</p>
            <p className="mr-6">
              {partySize} {parseInt(partySize) === 1 ? 'person' : 'people'}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Header;
