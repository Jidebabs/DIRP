import AuthHeader from "../../../components/Unauthenticated/components/AuthHeader";
import AuthFooter from "../../../components/Unauthenticated/components/AuthFooter";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";

const Verify = () => {
  const navigate = useNavigate();

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
            Verification Successful
          </div>
          <IoCheckmarkCircleOutline size={60} className="mt-10" />
          <div className="mt-20 font-semibold text-center">
            <Button
              size="md"
              color="black"
              className="px-20"
              onClick={() => navigate("/login")}
            >
              Login
            </Button>
          </div>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Verify;
