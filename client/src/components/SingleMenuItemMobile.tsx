import React, { FC } from "react";
import { MenuItem, MenuSection } from "../assets/menuItems";
import MenuPriceSection from "./MenuPriceSection";

type Props = { item: MenuItem; segment: MenuSection };

const SingleMenuItemMobile: FC<Props> = ({ item, segment }) => {
  return (
    <div
      className="bg-pink-500 bg-opacity-20 flex flex-col items-center my-3 shadow-md"
      style={{ maxWidth: "25rem" }}
    >
      <div className="flex p-5 items-center justify-between w-full">
        <h2 className="text-stone-800 text-bold text-2xl">{item.name}</h2>
        <MenuPriceSection item={item} />
      </div>

      <img
        src={item.image}
        alt={item.name + " visualisation"}
        className="w-11/12"
      />
      <p className="p-5 text-stone-800 text-lg">{item.description}</p>
    </div>
  );
};

export default SingleMenuItemMobile;
