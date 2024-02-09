import { BODY_IMG } from "../utils/links";
import Header from "./Header";
import Form from "./Form";
import { useEffect } from "react";
import { onAuthStateChanged } from "firebase/auth";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { auth } from "../utils/firebase";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Whenever user auth-state is changed (sign-in, sign-up, sign-out)
  // an action is dispatched to the redux store
  // and the user details are updated in the store.

  // This is also beneficial in navigating the pages after user-action.
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed-in or signs-up
        const { uid, email, displayName, photoURL} = user;
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
        // dispatch(removeUser());
        // navigate("/");
      }
    });
  }, []);

  return (
    <div className="overflow-hidden ">
      <div className="w-[2160px] relative">
        <img src={BODY_IMG} className="w-full max-[600px]:hidden" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 z-50 max-[600px]:bg-black max-[600px]:h-full">
        <Header />
        <Form />
      </div>
    </div>
  );
};

export default Login;
