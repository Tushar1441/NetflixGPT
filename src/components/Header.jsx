import { useDispatch, useSelector } from "react-redux";
import { NETFLIX_LOGO } from "../utils/constants";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../utils/firebase";
import { addUser, removeUser } from "../utils/userSlice";
import BrowseHeader from "./BrowseHeader";

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

  // Whenever user auth-state is changed (sign-in, sign-up, sign-out) an action is dispatched to the redux store and the user details are subscribed to the store.
  // This is also beneficial in navigating the pages after user-action.
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
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

    // this will unsubscribe to the onAuthStateChange after the header component unmounts
    return () => unsubscribe();
  }, []);

  return user ? (
    // if user is signed-in -->  Display the header with additional features.
    <BrowseHeader user={user} handleSignOut={handleSignOut} />
  ) : (
    // the user is not signed in
    <div className="px-36 py-2 max-xl:px-[32px] ">
      <img className="w-48 max-lg:w-28" src={NETFLIX_LOGO} alt="logo" />
    </div>
  );
};

export default Header;
