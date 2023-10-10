import { Item } from '@prisma/client';
import MenuCard from './MenuCard';

function Menu({ menu }: { menu: Item[] }) {
  return (
    <main className="mt-5 bg-white">
      <div>
        <div className="mb-1 mt-4 pb-1">
          <h1 className="text-4xl font-bold">Menu</h1>
        </div>
        <div className="flex flex-wrap justify-between">
          {menu.length ? (
            <>
              {menu.map((item) => (
                <MenuCard key={item.id} item={item} />
              ))}
            </>
          ) : (
            <p>No menu items found</p>
          )}
        </div>
      </div>
    </main>
  );
}
export default Menu;
