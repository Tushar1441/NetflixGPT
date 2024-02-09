import { NETFLIX_LOGO } from "../utils/links";

const Header = () => {
  return (
    <div className="px-36 py-2 max-xl:px-[32px] ">
      <img className="w-48 max-lg:w-28" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
