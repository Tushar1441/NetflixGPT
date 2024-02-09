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
