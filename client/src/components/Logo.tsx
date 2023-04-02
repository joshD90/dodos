import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import logo from "../assets/dodosLogo.png";

function Logo() {
  const [shadow, setShadow] = useState(false);
  useEffect(() => {
    const wait = setTimeout(() => {
      console.log("doing something");
      setShadow(true);
      const endShadow = setTimeout(() => setShadow(false), 100);
    }, 1000);

    return () => clearTimeout(wait);
  }, []);

  return (
    <div
      className={`w-2/3 sm:w-7/12 md:w-1/3 max-w-48 mt-12 sm:mt-10 md:mt-8 aspect-square rounded-full bg-none overflow-hidden cursor-pointer ${
        shadow ? "shadow-lg" : ""
      } hover:shadow-lg transition-all`}
    >
      <Link to="/menu">
        <img src={logo} className="w-full h-full" />
      </Link>
    </div>
  );
}

export default Logo;
