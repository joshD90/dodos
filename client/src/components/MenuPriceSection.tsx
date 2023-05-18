import React, { FC } from "react";
import { MenuItem } from "../assets/menuItems";

type Props = { item: MenuItem };

const MenuPriceSection: FC<Props> = ({ item }) => {
  const price = item.price.map((el) => el.toFixed(2));
  return (
    <div className="text-lg">
      {price.length === 1 ? (
        <p className="text-stone-600">€{price}</p>
      ) : (
        <>
          {price.map((price, index) => {
            return (
              <div className="flex flex-col" key={index}>
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
  );
};

export default MenuPriceSection;
