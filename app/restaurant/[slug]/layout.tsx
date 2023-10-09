import Header from './components/Header';

function RestaurantLayout({ children }: { children: React.ReactNode }) {
  return (
    <main>
      <Header />
      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        {children}
      </div>
    </main>
  );
}
export default RestaurantLayout;
