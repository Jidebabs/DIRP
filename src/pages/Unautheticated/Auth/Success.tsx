import AuthHeader from "../../../components/Unauthenticated/components/AuthHeader";
import AuthFooter from "../../../components/Unauthenticated/components/AuthFooter";
import { IoCheckmarkCircleOutline } from "react-icons/io5";

const Success = () => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex">
        <div className="min-h-screen w-4 bg-[#D43423]" />
        <div className="min-h-screen w-4 bg-[#0C0957]" />
        <div className="min-h-screen w-4 bg-[#21A1D6]" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <AuthHeader />
        <div className="flex flex-col justify-center items-center">
          <div className="font-semibold text-[36px]">
            Account created successfully
          </div>
          <IoCheckmarkCircleOutline size={60} className="mt-10" />
          <div className="mt-10 font-semibold text-center">
            A link has been sent to your email. Click on it to verify your
            account.
          </div>
          <div className="mt-5 max-w-[250px] mx-auto text-center text-sm">
            Didn’t get a verification email? Check your spam folder or <span className="cursor-pointer font-semibold">resend
            mail</span>
          </div>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Success;
