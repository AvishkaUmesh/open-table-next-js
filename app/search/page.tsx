import { Metadata } from 'next';
import Header from './components/Header';
import RestaurantCard from './components/RestaurantCard';
import SearchSideBar from './components/SearchSideBar';

export const metadata: Metadata = {
  title: 'Search Restaurants OpenTable',
  description: 'Book a table at your favorite restaurant',
};

function Search() {
  return (
    <>
      <Header />
      <div className="m-auto flex w-2/3 items-start justify-between py-4">
        <SearchSideBar />
        <div className="w-5/6">
          <RestaurantCard />
        </div>
      </div>
    </>
  );
}
export default Search;
