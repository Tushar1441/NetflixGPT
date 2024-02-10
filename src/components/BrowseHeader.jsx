import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { Link } from "react-router-dom";
import { btnToggle } from "../utils/movieMatchSlice";

const BrowseHeader = ({ user, handleSignOut }) => {
  const gptToggle = useSelector((store) => store.movieMatch.gptToggle);
  const dispatch = useDispatch();

  const handleToggle = () => {
    dispatch(btnToggle());
  };

  return (
    <div className="fixed z-50 left-0 right-0 flex items-center bg-black px-4">
      <div className="px-14 max-lg:px-4 ">
        <img className="w-32 py-2" src={NETFLIX_LOGO} alt="logo" />
      </div>

      <div className="w-10/12 flex justify-between max-[750px]:justify-around">
        <nav className="flex items-center">
          <button
            onClick={handleToggle}
            className=" px-2 py-1 mr-4 bg-white opacity-60 font-bold text-lg"
          >
            {gptToggle ? "Home" : "MovieMatch AI"}
          </button>

          <ul className="flex gap-4  text-[16px]">
            <li className=" px-3 py-1 bg-white opacity-60 font-bold text-lg max-[750px]:hidden">
              <Link>TV Shows</Link>
            </li>
            <li className=" px-3 py-1 bg-white opacity-60 font-bold text-lg max-[750px]:hidden">
              <Link>Movies</Link>
            </li>
            <li className="px-3 py-1 bg-white opacity-60 font-bold text-lg max-[1200px]:hidden">
              <Link>News & Popular</Link>
            </li>
            <li className="px-3 py-1 bg-white opacity-60 font-bold text-lg max-[1200px]:hidden">
              <Link>My List</Link>
            </li>
            <li className="px-3 py-1 bg-white opacity-60 font-bold text-lg max-[1200px]:hidden">
              <Link>English</Link>
            </li>
          </ul>
        </nav>

        <div className=" flex gap-4 justify-end items-center">
          <img
            src={user.photoURL}
            alt=""
            className="w-[36px] max-[750px]:hidden"
          />
          <button
            onClick={handleSignOut}
            className="text-white font-bold bg-red-600 px-4 py-1 text-lg rounded"
          >
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default BrowseHeader;
