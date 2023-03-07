import { menu } from "../assets/menuItems";
import MenuSegment from "../components/MenuSegment";

const Menu = () => {
  return (
    <div className="w-full min-h-screen flex justify-center items-center flex-col py-20 rounded-md">
      <>
        <h1 className="text-3xl" style={{ fontFamily: "cooperBlack" }}>
          Menu
        </h1>
        {menu.map((section) => {
          const sectionToPass = {
            name: section.name,
            contents: section.contents,
          };
          return <MenuSegment section={sectionToPass} />;
        })}
      </>
    </div>
  );
};

export default Menu;
