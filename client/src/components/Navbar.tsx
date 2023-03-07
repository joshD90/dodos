import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="fixed top-0 right-0 w-full py-3 text-white bg-stone-900 flex justify-between">
      <div className="ml-5">Logo</div>
      <div className="mr-5 flex gap-10">
        <NavLink to="/" className="hover:text-stone-300">
          Home
        </NavLink>
        <NavLink to="/menu" className="hover:text-stone-300">
          Menu
        </NavLink>
        <NavLink to="/about" className="hover:text-stone-300">
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
