import { BODY_IMG } from "../utils/constants";
import Header from "./Header";
import LoginForm from "./LoginForm";

const Login = () => {
  return (
    <div className="overflow-hidden ">
      <div className="w-[2160px] relative">
        <img src={BODY_IMG} className="w-full max-[600px]:hidden" />
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>
      <div className="absolute inset-0 z-50 max-[600px]:bg-black max-[600px]:h-full">
        <Header />
        <LoginForm />
      </div>
    </div>
  );
};

export default Login;
