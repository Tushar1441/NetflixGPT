import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./userSlice";
import { USER_ICON } from "./constants";

const userAuthentication = (
  signIn,
  formValues,
  setFormErrors,
  formErrors,
  dispatch
) => {
  // User Sign -up
  if (!signIn) {
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // updating the user profile with displayName and photoURL
        updateProfile(user, {
          displayName: formValues.fullname,
          photoURL: USER_ICON,
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
            console.log(displayName, photoURL);
            dispatch(
              addUser({
                uid: uid,
                email: email,
                displayName: displayName,
                photoURL: photoURL,
              })
            );
          })
          .catch((error) => {
            console.log(error.errorMessage);
          });
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;

        setFormErrors({
          ...formErrors,
          errorcode: errorCode,
          errormsg: errorMessage,
        });
      });
  }
  // User Sign in
  else {
    signInWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        // Signed in
        const user = userCredential.user;
      })
      .catch((error) => {
        const errorCode = error.code;
        const errorMessage = error.message;
        setFormErrors({
          ...formErrors,
          errorcode: errorCode,
          errormsg: errorMessage,
        });
      });
  }
};

export default userAuthentication;
