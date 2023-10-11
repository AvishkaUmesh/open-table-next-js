import Header from './components/Header';

function Loading() {
  return (
    <main>
      <Header />
      <div className="mt-10 flex flex-wrap justify-center px-36 py-3">
        {[...Array(12)].map((_, index) => (
          <div
            className="boarder m-3 h-72 w-64 animate-pulse cursor-pointer overflow-hidden rounded bg-slate-200"
            key={index}
          ></div>
        ))}
      </div>
    </main>
  );
}
export default Loading;
