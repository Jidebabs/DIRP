import { IoCheckmarkCircleOutline } from "react-icons/io5";
import AuthLayout from "./Layout";

const Success = () => {
  return (
    <AuthLayout>
      <div className="flex flex-col justify-center items-center h-full">
        <div className="font-semibold text-[36px]">
          Account created successfully
        </div>
        <IoCheckmarkCircleOutline size={60} className="mt-10" />
        <div className="mt-10 font-semibold text-center">
          A link has been sent to your email. Click on it to verify your
          account.
        </div>
        <div className="mt-5 max-w-[250px] mx-auto text-center text-sm">
          Didn’t get a verification email? Check your spam folder or{" "}
          <span className="cursor-pointer font-semibold">resend mail</span>
        </div>
      </div>
    </AuthLayout>
  );
};

export default Success;
