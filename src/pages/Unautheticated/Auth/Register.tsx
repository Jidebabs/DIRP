import { useNavigate } from "react-router-dom";
import AuthLayout from "./Layout";
import { Button, PasswordInput, TextInput } from "@mantine/core";

const Register = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex-1 flex flex-col justify-center items-center p-5 overflow-auto w-full">
        <div className="text-[36px] font-bold text-center">
          Create an account
        </div>
        <div className="mt-1 text-center">
          Enter your details below to create an account
        </div>
        <div className="mt-5 max-w-[466px] w-full mx-auto shadow-sm p-5 border rounded-md">
          <TextInput
            size="md"
            required
            label="Email"
            placeholder="Enter your email"
            className="w-full"
            type="email"
          />
          <TextInput
            size="md"
            required
            label="Username"
            placeholder="Enter your username"
            className="w-full"
            mt={16}
          />
          <PasswordInput
            size="md"
            required
            label="Password"
            placeholder="Enter your password"
            className="w-full"
          />
          <PasswordInput
            size="md"
            required
            label="Confirm Password"
            placeholder="Confirm your password"
            className="w-full"
            mt={16}
          />

          <Button
            color="black"
            size="md"
            className="w-full mt-10 mb-5"
            onClick={() => {
              navigate("/success");
            }}
          >
            Create account
          </Button>
        </div>
        <div className="flex max-w-[466px] w-full mt-3 justify-between text-sm font-bold">
          <div />
          <div
            className="underline cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Already have an account?
          </div>
        </div>
        <div className="mt-5 text-sm text-center max-w-[350px] mx-auto">
          By clicking continue, you agree to our
          <span className="underline font-medium">Terms of Use </span> and{" "}
          <span className="underline font-medium">Privacy Policy.</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Register;
