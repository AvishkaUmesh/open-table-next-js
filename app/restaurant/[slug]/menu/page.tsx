import renderTitle from '@/untils/renderTitle';
import { Item, PrismaClient } from '@prisma/client';
import { Metadata } from 'next';
import Menu from '../components/Menu';
import RestaurantNavBar from '../components/RestaurantNavBar';

export function generateMetadata({
  params,
}: {
  params: { slug: string };
}): Metadata {
  const restaurantTitle = renderTitle(params.slug);

  return {
    title: `Menu of ${restaurantTitle} Restaurant | OpenTable`,
    description: 'Book a table at your favorite restaurant',
  };
}

const prisma = new PrismaClient();

const fetchRestaurantMenu = async (slug: string): Promise<Item[]> => {
  const restaurant = await prisma.restaurant.findUnique({
    where: {
      slug,
    },
    select: {
      items: true,
    },
  });

  if (!restaurant) {
    throw new Error('Restaurant not found');
  }

  return restaurant.items;
};

async function RestaurantMenu({ params }: { params: { slug: string } }) {
  const menu = await fetchRestaurantMenu(params.slug);
  console.log(menu);
  return (
    <div className="w-[100%] rounded bg-white p-3 shadow">
      <RestaurantNavBar slug={params.slug} />
      <Menu menu={menu} />
    </div>
  );
}
export default RestaurantMenu;
