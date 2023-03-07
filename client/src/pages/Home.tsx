import { SiDeliveroo } from "react-icons/si";
import { MdOutlineMenuBook } from "react-icons/md";

import Logo from "../components/Logo";
import ActionButton from "../components/ActionButton";

const Home = () => {
  return (
    <div className="w-full h-full flex items-center justify-between flex-col">
      <h1 className="text-4xl font-bold mb-10 text-stone-800">
        Dodo's Chicken
      </h1>
      <Logo />
      <div className="flex justify-between items-center mt-10 gap-10">
        <ActionButton
          text="Deliveroo"
          icon={<SiDeliveroo style={{ color: "00CDBC" }} />}
        />
        <ActionButton text="Menu" icon={<MdOutlineMenuBook />} />
      </div>
    </div>
  );
};

export default Home;
