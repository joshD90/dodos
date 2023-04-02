import { useEffect } from "react";
import { SiDeliveroo } from "react-icons/si";
import { menu } from "../assets/menuItems";
import ActionButton from "../components/ActionButton";
import MenuSegment from "../components/MenuSegment";

const Menu = () => {
  //scroll to top of page on page load
  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }, []);

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
          return (
            <MenuSegment section={sectionToPass} key={sectionToPass.name} />
          );
        })}
        <a
          href="https://deliveroo.ie/menu/Dublin/harold's-cross/dodos"
          target="_blank"
          style={{ marginTop: "3rem" }}
        >
          <ActionButton
            text="Deliveroo"
            icon={<SiDeliveroo style={{ color: "00CDBC" }} />}
          />
        </a>
      </>
    </div>
  );
};

export default Menu;
