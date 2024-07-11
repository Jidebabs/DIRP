import { Button, PasswordInput, TextInput } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./Layout";

const Login = () => {
  const navigate = useNavigate();

  const handleLogin = () => {
    localStorage.setItem("_dirp", "tokensss");
    navigate("/");
  };
  return (
    <AuthLayout>
      <div className="flex-1 flex flex-col justify-center items-center p-5 w-full my-10">
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
            className="w-full"
          />
          <PasswordInput
            size="md"
            required
            label="Password"
            placeholder="Enter your password"
            mt={16}
            className="w-full"
          />
          <Button
            color="black"
            size="md"
            className="w-full mt-10 mb-5"
            onClick={handleLogin}
          >
            Login
          </Button>
        </div>
        <div className="flex max-w-[466px] w-full mt-3 justify-between text-sm font-bold">
          <div
            className="underline cursor-pointer"
            onClick={() => navigate("/create-account")}
          >
            Don’t have an account??
          </div>
          <div
            className="underline cursor-pointer"
            onClick={() => navigate("/forgot-password")}
          >
            Forgot password?
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Login;
