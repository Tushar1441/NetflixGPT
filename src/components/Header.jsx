import { NETFLIX_LOGO } from "../utils/links";
import React from "react";

const Header = () => {
  return (
    <div className="px-8 py-2">
      <img className="w-52" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
