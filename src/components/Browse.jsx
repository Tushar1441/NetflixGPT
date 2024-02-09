import Header from "./Header";
import { USER_ICON } from "../utils/links";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { removeUser } from "../utils/userSlice";

const Browse = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
        dispatch(removeUser());
        navigate("/");
      })
      .catch((error) => {
        // An error happened.
        console.log(error)
      });
  };

  return (
    <div className="flex bg-black justify-between items-center pr-24">
      <Header />
      <div className="flex gap-8">
        <img src={USER_ICON} alt="" className="w-12" />
        <button onClick={handleSignOut} className="text-white">
          Sign Out
        </button>
      </div>
    </div>
  );
};

export default Browse;
