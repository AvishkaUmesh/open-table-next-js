import Header from './components/Header';

function Loading() {
  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <div className="w-1/5 pr-4">
          <div className="flex flex-col border-b pb-4">
            <h1 className="mb-2">Region</h1>
          </div>
          <div className="mt-3 flex flex-col border-b pb-4">
            <h1 className="mb-2">Cuisine</h1>
          </div>
          <div className="mt-3 pb-4">
            <h1 className="mb-2">Price</h1>
            <div className="flex"></div>
          </div>
        </div>

        <div className="w-5/6">
          {[...Array(6)].map((_, index) => (
            <div className="m-5 flex items-center" key={index}>
              <div className="h-36 w-36 animate-pulse rounded border border-t-4 bg-slate-200"></div>
              <div className="ml-4">
                <div className="h-8 w-32 animate-pulse rounded bg-gray-200"></div>
                <div className="mt-2 h-4 w-20 animate-pulse rounded bg-gray-200"></div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
}
export default Loading;
