import { Metadata } from 'next';
import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

export const metadata: Metadata = {
  title: 'Menu of Milestones Restaurant | OpenTable',
  description: 'Book a table at your favorite restaurant',
};

function RestaurantMenu() {
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <RestaurantNavBar />
      <Menu />
    </div>
  );
}
export default RestaurantMenu;
