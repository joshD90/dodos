import logo from "../assets/logo.jpeg";

function Logo() {
  return (
    <div className="w-1/2 sm:w-2/5 md:w-1/4 max-w-48 aspect-square rounded-full bg-none overflow-hidden">
      <img src={logo} className="w-full h-full" />
    </div>
  );
}

export default Logo;
