import { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "../assets/dodosLogo.jpeg";

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
    <div className="fixed top-0 right-0 w-screen py-3 text-white bg-stone-900 flex justify-between items-center z-50">
      <div className={`${dropped ? "hidden" : "auto"}`}>
        <NavLink to="/" className="hover:text-stone-300">
          <div className="ml-5">
            <img src={logo} className="h-10 rounded-full" />
          </div>
        </NavLink>
      </div>
      {/* burger bar */}
      <div
        className="w-8 h-8 text-white flex flex-col justify-around items-center mr-5 cursor-pointer absolute top-5 right-0 sm:hidden text-3xl z-50"
        onClick={toggleDrop}
      >
        {!dropped ? (
          <>
            <span className="border-2 border-white w-full" />
            <span className="border-2 border-white w-full" />
            <span className="border-2 border-white w-full" />
          </>
        ) : (
          "X"
        )}
      </div>
      {/* links */}

      <div
        className={`${
          dropped
            ? "w-screen h-screen flex items-center justify-center flex-col text-2xl gap-10 relative transition-all"
            : "mr-5 gap-10 hidden sm:flex transition-all"
        }`}
      >
        <NavLink
          to="/"
          onClick={() => setDropped(false)}
          className="hover:text-stone-300"
        >
          Home
        </NavLink>
        <NavLink
          to="/menu"
          onClick={() => setDropped(false)}
          className="hover:text-stone-300"
        >
          Menu
        </NavLink>
        <NavLink
          to="/about"
          onClick={() => setDropped(false)}
          className="hover:text-stone-300"
        >
          About
        </NavLink>
      </div>
    </div>
  );
};

export default Navbar;
