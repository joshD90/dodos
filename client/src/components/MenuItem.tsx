import { FC } from "react";
import { MenuItem } from "../assets/menuItems";

type Props = {
  item: MenuItem;
};

const MenuItem: FC<Props> = ({ item }) => {
  return (
    <div>
      <h2>{item.name}</h2>
      <p>{item.description}</p>
      <div>
        {item.price.length === 1 ? (
          <p>{item.price}</p>
        ) : (
          <>
            {item.price.map((price, index) => {
              <div>
                <span>{price}</span>
                {item.sizes && <span>{item.sizes[index]}</span>}
              </div>;
            })}
          </>
        )}
      </div>
    </div>
  );
};
