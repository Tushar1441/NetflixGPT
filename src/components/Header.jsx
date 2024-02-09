import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/links";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import { USER_ICON } from "../utils/links";

const Header = () => {
  const user = useSelector((store) => store.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // handle the signout button function
  const handleSignOut = () => {
    signOut(auth)
      .then(() => {
        // Sign-out successful.
      })
      .catch((error) => {
        console.log(error.errorMessage);
        navigate("/error");
      });
  };

  // Whenever user auth-state is changed (sign-in, sign-up, sign-out)
  // an action is dispatched to the redux store and the user details are subscribed to the store.
  // This is also beneficial in navigating the pages after user-action.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed-in or signs-up
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  // if user is signed-in -->  Display the header with additional features.
  return user ? (
    <div className="flex justify-between items-center pr-8 bg-black">
      <div className="px-36 py-2 max-xl:px-[32px] ">
        <img className="w-28" src={NETFLIX_LOGO} alt="logo" />
      </div>

      <div className="flex gap-4">
        <img src={USER_ICON} alt="" className="w-12" />
        <button onClick={handleSignOut} className="text-white font-bold bg-red-600 px-4 rounded">
          Sign Out
        </button>
      </div>
    </div>
  ) : (
    // the user is not signed in
    <div className="px-36 py-2 max-xl:px-[32px] ">
      <img className="w-48 max-lg:w-28" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
