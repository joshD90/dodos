import { FC } from "react";

import { MenuSection } from "../assets/menuItems";
import SingleMenuItem from "./SingleMenuItem";
import SingleMenuItemMobile from "./SingleMenuItemMobile";
import { useMediaQuery } from "../hooks/useMediaQuery";

type Props = {
  section: MenuSection;
};

const MenuSegment: FC<Props> = ({ section }) => {
  const isSmallWindow = useMediaQuery("(max-width:680px)");

  return (
    <div className="bg-white shadow-lg w-11/12 m-5 flex items-center flex-col gap-2 py-5 pb-10">
      <>
        <h2 className="w-full py-2 text-center font-bold text-stone-800 text-xl">
          {section.name}
        </h2>
        {section.contents.map((item) => {
          if (!isSmallWindow || section.name === "Drinks") {
            return (
              <SingleMenuItem item={item} key={item.name} segment={section} />
            );
          } else
            return (
              <SingleMenuItemMobile
                item={item}
                key={item.name}
                segment={section}
              />
            );
        })}
      </>
    </div>
  );
};

export default MenuSegment;
