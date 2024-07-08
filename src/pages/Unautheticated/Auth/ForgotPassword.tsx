import { Button, TextInput } from "@mantine/core";
import AuthLayout from "./Layout";
import { useNavigate } from "react-router-dom";

const ForgotPassword = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="mt-10">
        <div className="font-semibold text-[36px] text-center">
          Forgot password
        </div>
        <div className="text-center max-w-[350px] mx-auto mt-5">
          Enter the email address you registered with and we will send you a
          link to create a new password.
        </div>

        <div className="max-w-[372px] mx-auto mt-5">
          <TextInput
            size="md"
            required
            label="Email"
            placeholder="Enter your email"
            type="email"
          />
          <Button color="black" size="md" className="w-full mt-10 mb-5"
          onClick={() => navigate("/reset-password")}>
            Send Link
          </Button>
          <div
            className="text-center cursor-pointer"
            onClick={() => navigate("/login")}
          >
            Remember password? <span className="font-semibold">Log in</span>
          </div>
        </div>
      </div>
    </AuthLayout>
  );
};

export default ForgotPassword;
