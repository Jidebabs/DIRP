import { Button, PasswordInput } from "@mantine/core";
import AuthLayout from "./Layout";
import { useNavigate } from "react-router-dom";

const ResetPassword = () => {
  const navigate = useNavigate();
  return (
    <AuthLayout>
      <div className="mt-10">
        <div className="max-w-[372px] mx-auto">
          <div className="font-semibold text-[36px] ">Reset password</div>
          <PasswordInput
            size="md"
            mt={40}
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
          <Button color="black" size="md" className="w-full mt-10 mb-5"
          onClick={() => navigate("/pasword-success")}>
            Submit
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

export default ResetPassword;
