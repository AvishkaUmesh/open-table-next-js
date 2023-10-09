function Header() {
  return (
    <div className="bg-gradient-to-r from-[#0f1f47] to-[#5f6984] p-2">
      <div className="m-auto flex justify-center py-3 text-left text-lg">
        <input
          className="mr-3  w-[450px] rounded p-2"
          type="text"
          placeholder="State, city or town"
        />
        <button className="rounded bg-red-600 px-9 py-2 text-white">
          Let&apos;s go
        </button>
      </div>
    </div>
  );
}
export default Header;
