import Search from "./search";
import Shoppingcart from "./shoppingbag";


function Header() {
  return (
    <header className="bg-gradient-to-r from-indigo-500 from-10% via-sky-500 via-30% to-emerald-500 to-90% p-8 flex justify-between items-center">
      <h1 className="text-6xl">My React Shoe Shop</h1>
      <Search />
      <Shoppingcart />
    </header>
  );
}

export default Header;