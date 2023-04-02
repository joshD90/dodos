import { useEffect } from "react";
import { SiDeliveroo } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import ActionButton from "../components/ActionButton";

const Home = () => {
  //scroll to top of page on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);
  return (
    <div
      className="w-screen flex h-fit items-center justify-between flex-col py-20"
      style={{ minHeight: "92vh" }}
    >
      {/* <h1
        className="text-4xl sm:text-5xl md:text-6xl font-bold mb-5 mt-10 sm:mt-0 text-stone-800"
        style={{ fontFamily: "cooperBlack" }}
      >
        Dodo's Chicken
      </h1> */}

      <Logo />

      <div className="flex justify-between items-center mt-10 gap-2 sm:gap-5 md:gap-10">
        <a
          href="https://deliveroo.ie/menu/Dublin/harold's-cross/dodos"
          target="_blank"
        >
          <ActionButton
            text="Deliveroo"
            icon={<SiDeliveroo style={{ color: "00CDBC" }} />}
          />
        </a>
        {/* <Link to="/menu">
          <ActionButton text="Menu" icon={<MdOutlineMenuBook />} />
        </Link> */}
      </div>
    </div>
  );
};

export default Home;
