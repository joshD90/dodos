import React, { FC, ReactNode } from "react";

type Props = {
  text: string;
  icon?: ReactNode;
};

const ActionButton: FC<Props> = ({ text, icon }) => {
  return (
    <button className="p-2 font-bold text-stone-800 rounded-md border-2 w-32 sm:w-40 md:w-40 bg-white border-1 border-stone-400 hover:shadow-lg flex items-center justify-center gap-3 sm:gap-5">
      {text}
      {icon && <div className="text-2xl">{icon}</div>}
    </button>
  );
};

export default ActionButton;
