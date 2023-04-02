import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/dodosLogo.png";

const Navbar = () => {
  const [dropped, setDropped] = useState(false);

  const toggleDrop = () => {
    dropped === true ? setDropped(false) : setDropped(true);
    console.log("toggling");
  };

  useEffect(() => {
    const onWindowResize = (e: UIEvent) => {
      if (window.innerWidth > 640) setDropped(false);
    };
    window.addEventListener("resize", onWindowResize);

    return () => window.removeEventListener("resize", onWindowResize);
  });

  return (
    <div className="fixed top-0 right-0 w-screen py-3 text-stone-800 bg-white flex justify-between items-center z-50 ">
      <div className={`${dropped ? "hidden" : "auto"}`}>
        <NavLink to="/" className="hover:text-stone-900">
          <div className="ml-5">
            <img src={logo} className="h-10 rounded-full" />
          </div>
        </NavLink>
      </div>
      {/* burger bar */}
      <div
        className="w-8 h-8 text-stone-700 font-bold flex flex-col justify-around items-center mr-5 sm:cursor-pointer absolute top-5 right-0 sm:hidden text-3xl z-50 focus:outline-none"
        onClick={toggleDrop}
      >
        {!dropped ? (
          <>
            <span className="border-2 border-stone-800 w-full" />
            <span className="border-2 border-stone-800 w-full" />
            <span className="border-2 border-stone-800 w-full" />
          </>
        ) : (
          "X"
        )}
      </div>
      {/* links */}

      <div
        className={`${
          dropped
            ? "w-screen h-screen flex items-center justify-center flex-col text-3xl gap-10 relative transition-all font-bold"
            : "mr-5 gap-10 hidden sm:flex transition-all font-bold"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setDropped(false)}
          className="hover:text-stone-900"
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          onClick={() => setDropped(false)}
          className="hover:text-stone-900"
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setDropped(false)}
          className="hover:text-stone-900"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
