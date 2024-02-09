import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "./firebase";
import { addUser } from "./userSlice";

export const validateData = (values, isSignIn) => {
  const errors = {};
  const regex = /^\w+@[a-zA-Z_]+?\.[a-zA-Z]{2,3}$/;
  const nameRegex =
    /(^[A-Za-z]{3,16})([ ]{0,1})([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})?([ ]{0,1})?([A-Za-z]{3,16})/;

  if (!values.fullname && !isSignIn) {
    errors.fullname = "Name is required!";
  }
  if (!values.email) {
    errors.email = "Email Id is required!";
  }
  if (!values.password) {
    errors.password = "Password Id is required!";
  }

  if (values.fullname && !nameRegex.test(values.fullname)) {
    errors.fullname = "Name is not Valid!";
  }

  if (values.email && !regex.test(values.email)) {
    errors.email = "Email id is not Valid!";
  }

  if (values.password && values.password.length < 4) {
    errors.password = "Password must contain minimum 4 letters";
  } else if (values.password.length > 10) {
    errors.password = "Password must contain maximum 10 letters";
  }

  return errors;
};

export const userAuthentication = (
  signIn,
  formValues,
  setFormErrors,
  formErrors,
  dispatch
) => {
  if (!signIn) {
    createUserWithEmailAndPassword(auth, formValues.email, formValues.password)
      .then((userCredential) => {
        // Signed up
        const user = userCredential.user;

        // updating the user profile with displayName and photoURL
        updateProfile(user, {
          displayName: formValues.fullname,
          photoURL: "https://example.com/jane-q-user/profile.jpg",
        })
          .then(() => {
            const { uid, email, displayName, photoURL } = auth.currentUser;
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
  } else {
    // else sign in the user
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
