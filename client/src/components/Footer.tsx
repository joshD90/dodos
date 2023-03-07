import { AiFillFacebook, AiFillInstagram } from "react-icons/ai";
import { BsFillTelephoneFill } from "react-icons/bs";
import { MdEmail } from "react-icons/md";

const Footer = () => {
  return (
    <div className="fixed bottom-0 w-full flex bg-stone-900 text-white justify-between py-3">
      <div className="flex items-center gap-5 cursor-pointer text-xl pl-10">
        <div className="hover:text-blue-200">
          <AiFillFacebook />
        </div>
        <div className="hover:text-blue-200">
          <AiFillInstagram />
        </div>
      </div>
      <div className="flex flex-col text-sm gap-2 mr-5 ">
        <div className="flex gap-2 items-center">
          <BsFillTelephoneFill />
          <span className="cursor-pointer">085 2374436</span>
        </div>
        <div className="flex gap-2 items-center">
          <MdEmail />
          <span className="cursor-pointer">brw@email.com</span>
        </div>
      </div>
    </div>
  );
};

export default Footer;
