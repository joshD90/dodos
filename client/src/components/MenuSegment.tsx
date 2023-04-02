import { FC } from "react";

import { MenuSection } from "../assets/menuItems";
import SingleMenuItem from "./SingleMenuItem";

type Props = {
  section: MenuSection;
};

const MenuSegment: FC<Props> = ({ section }) => {
  return (
    <div className="bg-white shadow-lg w-11/12 m-5 flex items-center flex-col gap-2 py-5 pb-10">
      <>
        <h2 className="w-full py-2 text-center font-bold text-stone-800 text-xl">
          {section.name}
        </h2>
        {section.contents.map((item) => {
          return <SingleMenuItem item={item} key={item.name} />;
        })}
      </>
    </div>
  );
};

export default MenuSegment;
