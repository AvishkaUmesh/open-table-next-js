import Header from './components/Header';

function RestaurantLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { slug: string };
}) {
  return (
    <main>
      <Header name={params.slug} />
      <div className="0 m-auto -mt-11 flex w-2/3 items-start justify-between">
        {children}
      </div>
    </main>
  );
}
export default RestaurantLayout;
