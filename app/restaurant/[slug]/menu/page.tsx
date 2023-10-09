import NavBar from '@/app/components/NavBar';
import Header from '../components/Header';
import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

function RestaurantMenu() {
  return (
    <main className="min-h-screen w-screen bg-gray-100">
      <main className="m-auto max-w-screen-2xl bg-white">
        <NavBar />
        <Header />
        <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
          <div className="w-[100%] rounded bg-white p-3 shadow">
            <RestaurantNavBar />
            <Menu />
          </div>
        </div>
      </main>
    </main>
  );
}
export default RestaurantMenu;
