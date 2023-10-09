function SearchSideBar() {
  return (
    <div className="w-1/5">
      <div className="border-b pb-4">
        <h1 className="mb-2">Region</h1>
        <p className="text-reg font-light">Toronto</p>
        <p className="text-reg font-light">Ottawa</p>
        <p className="text-reg font-light">Montreal</p>
        <p className="text-reg font-light">Hamilton</p>
        <p className="text-reg font-light">Kingston</p>
        <p className="text-reg font-light">Niagara</p>
      </div>
      <div className="mt-3 border-b pb-4">
        <h1 className="mb-2">Cuisine</h1>
        <p className="text-reg font-light">Mexican</p>
        <p className="text-reg font-light">Italian</p>
        <p className="text-reg font-light">Chinese</p>
      </div>
      <div className="mt-3 pb-4">
        <h1 className="mb-2">Price</h1>
        <div className="flex">
          <button className="w-full rounded-l border p-2 text-reg font-light">
            $
          </button>
          <button className="w-full border-b border-r border-t p-2 text-reg font-light">
            $$
          </button>
          <button className="w-full rounded-r border-b border-r border-t p-2 text-reg font-light">
            $$$
          </button>
        </div>
      </div>
    </div>
  );
}
export default SearchSideBar;
