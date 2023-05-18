import { FC } from "react";
import { motion } from "framer-motion";
import { MenuItem, MenuSection } from "../assets/menuItems";
import MenuPriceSection from "./MenuPriceSection";

type Props = {
  item: MenuItem;
  segment: MenuSection;
};

const SingleMenuItem: FC<Props> = ({ item, segment }) => {
  const price = item.price.map((price) => price.toFixed(2));
  return (
    <motion.div
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      className="bg-pink-500 w-11/12 shadow-md bg-opacity-20 flex justify-between items-center h-auto"
    >
      <div className="p-5">
        <h2 className="text-stone-800 font-bold">{item.name}</h2>
        <div>
          <p className="text-stone-800 mr-5 mb-5">{item.description}</p>
          <MenuPriceSection item={item} />
        </div>
      </div>
      <div
        className={`${
          segment.name === "Drinks" ? "w-24 h-24" : "w-48 h-48"
        } shrink-0 flex items-center justify-center`}
      >
        <img
          src={item.image}
          alt={item.name + " visualisation"}
          className={`${
            segment.name === "Drinks"
              ? "object-contain h-5/6"
              : "w-full object-cover h-full"
          }`}
        />
      </div>
    </motion.div>
  );
};

export default SingleMenuItem;
