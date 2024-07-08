import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { Button } from "@mantine/core";
import { useNavigate } from "react-router-dom";
import AuthLayout from "./Layout";

const Verify = () => {
  const navigate = useNavigate();

  return (
    <AuthLayout>
      <div className="flex-1 flex flex-col justify-center items-center w-full h-full">
        <div className="font-semibold text-[36px]">Verification Successful</div>
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
    </AuthLayout>
  );
};

export default Verify;
