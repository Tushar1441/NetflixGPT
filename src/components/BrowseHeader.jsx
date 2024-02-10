import { NETFLIX_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";

const BrowseHeader = ({ user, handleSignOut }) => {
  return (
    <div className="fixed z-50 left-0 right-0 flex items-center bg-black text-white">
      <div className="w-2/12 flex justify-center">
        <img className="w-32 py-2" src={NETFLIX_LOGO} alt="logo" />
      </div>

      <nav className="w-8/12 max-[1200px]:hidden">
        <ul className="flex gap-6 text-gray-300 text-[16px]">
          <li className="active:font-bold ">
            <Link>Home</Link>
          </li>
          <li className="active:font-bold ">
            <Link>TV Shows</Link>
          </li>
          <li className="active:font-bold ">
            <Link>Movies</Link>
          </li>
          <li className="active:font-bold ">
            <Link>News & Popular</Link>
          </li>
          <li className="active:font-bold ">
            <Link>My List</Link>
          </li>
          <li className="active:font-bold ">
            <Link>Browse by Language</Link>
          </li>
        </ul>
      </nav>

      <div className="w-2/12 max-[1200px]:w-10/12 flex gap-4 justify-end pr-8 items-center">
        <img src={user.photoURL} alt="" className="w-[36px]" />
        <button
          onClick={handleSignOut}
          className="text-white font-bold bg-red-600 px-4 py-1 text-lg rounded"
        >
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default BrowseHeader;
