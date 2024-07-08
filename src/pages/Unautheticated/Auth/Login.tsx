import { Button, PasswordInput, TextInput } from "@mantine/core";
import AuthFooter from "../../../components/Unauthenticated/components/AuthFooter";
import AuthHeader from "../../../components/Unauthenticated/components/AuthHeader";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate()
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex">
        <div className="min-h-screen w-4 bg-[#D43423]" />
        <div className="min-h-screen w-4 bg-[#0C0957]" />
        <div className="min-h-screen w-4 bg-[#21A1D6]" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <AuthHeader />
        <div className="flex-1 flex flex-col justify-center items-center p-5 overflow-auto my-10">
          <div className="text-[36px] font-bold text-center">Welcome back</div>
          <div className="mt-1 text-center">
            Enter your details below to continue using DIRP
          </div>
          <div className="mt-5 max-w-[466px] w-full mx-auto shadow-sm p-5 border rounded-md">
            <TextInput
              required
              placeholder="Enter your email"
              type="email"
              label="Email"
              size="md"
            />
            <PasswordInput
              size="md"
              required
              label="Password"
              placeholder="Enter your password"
              mt={16}
            />
            <Button color="black" size="md" className="w-full mt-10 mb-5">
              Login
            </Button>
          </div>
          <div className="flex max-w-[466px] w-full mt-3 justify-between text-sm font-bold">
            <div className="underline cursor-pointer"
            onClick={() => navigate("/create-account")}>Don’t have an account??</div>
            <div className="underline cursor-pointer">Forgot password?</div>
          </div>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Login;
