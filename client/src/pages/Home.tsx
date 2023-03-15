import { SiDeliveroo } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";
import { Link } from "react-router-dom";

import Logo from "../components/Logo";
import ActionButton from "../components/ActionButton";

const Home = () => {
  return (
    <div
      className="w-screen flex h-fit items-center justify-between flex-col py-20"
      style={{ minHeight: "92vh" }}
    >
      <h1
        className="text-3xl sm:text-4xl md:text-5xl font-bold mb-10 text-stone-800"
        style={{ fontFamily: "cooperBlack" }}
      >
        Dodo's Chicken
      </h1>
      <Logo />
      <div className="flex justify-between items-center mt-10 gap-2 sm:gap-5 md:gap-10">
        <a href="https://www.deliveroo.ie" target="_blank">
          <ActionButton
            text="Deliveroo"
            icon={<SiDeliveroo style={{ color: "00CDBC" }} />}
          />
        </a>
        <Link to="/menu">
          <ActionButton text="Menu" icon={<MdOutlineMenuBook />} />
        </Link>
      </div>
    </div>
  );
};

export default Home;
