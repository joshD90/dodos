import { FC } from "react";
import { motion } from "framer-motion";
import { MenuItem } from "../assets/menuItems";

type Props = {
  item: MenuItem;
};

const SingleMenuItem: FC<Props> = ({ item }) => {
  const price = item.price.map((price) => price.toFixed(2));
  return (
    <motion.div
      initial={{ scale: 0.95 }}
      whileInView={{ scale: 1 }}
      className="p-5 bg-red-300 w-11/12 shadow-md"
    >
      <h2 className="text-stone-800 font-bold">{item.name}</h2>
      <div className="flex items-center text-sm md:text-lg justify-between">
        <p className="text-stone-800 mr-5">{item.description}</p>
        <div className="text-lg">
          {price.length === 1 ? (
            <p className="text-stone-600">€{price}</p>
          ) : (
            <>
              {price.map((price, index) => {
                return (
                  <div className="flex flex-col">
                    {item.sizes && (
                      <span className="text-sm">{item.sizes[index]}</span>
                    )}
                    <span className="text-stone-600 text-sm">€{price}</span>
                  </div>
                );
              })}
            </>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default SingleMenuItem;
