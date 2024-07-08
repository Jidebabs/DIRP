import { Button, PasswordInput } from "@mantine/core";
import { FaStar } from "react-icons/fa6";
import { useNavigate } from "react-router-dom";

interface IProps {
  checked: string;
}

const StepThree = ({ checked }: IProps) => {
  const navigate = useNavigate();
  return (
    <div className="w-full">
      <div className="max-w-[246px] w-full mx-auto mt-3 flex gap-1 items-center">
        <div className="h-[10px] w-[10px] bg-[#0C0957] rounded-full"></div>
        <div className="flex-1 h-1 rounded bg-[#0C0957]"></div>
        <div className="h-[10px] w-[10px] bg-[#0C0957] rounded-full"></div>
        <div className="flex-1 h-1 rounded bg-[#0C0957] "></div>
        <div className="h-[10px] w-[10px] bg-[#0C0957] rounded-full"></div>
      </div>
      <div className="mt-5 max-w-[466px] w-full mx-auto shadow-sm p-5 border rounded-md">
        <div className="flex items-center gap-2 mb-5 font-medium text-sm">
          <FaStar />
          <div>{checked === "cyber" ? "Dcyber admin" : "AFN admin"}</div>
        </div>
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
          className="w-full mt-20 mb-5"
          onClick={() => {
            navigate("/success");
          }}
        >
          Create account
        </Button>
      </div>
    </div>
  );
};

export default StepThree;
