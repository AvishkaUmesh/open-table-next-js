import renderTitle from '@/untils/renderTitle';

function Header({ name }: { name: string }) {
  return (
    <div className="h-96 overflow-hidden">
      <div className="flex h-full items-center justify-center bg-gradient-to-r from-[#0f1f47] to-[#5f6984] bg-center">
        <h1 className="text-shadow text-center text-7xl capitalize text-white">
          {renderTitle(name)}
        </h1>
      </div>
    </div>
  );
}
export default Header;
