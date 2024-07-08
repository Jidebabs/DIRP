import { Button, Select, TextInput } from "@mantine/core";
import { FaStar } from "react-icons/fa6";

interface IProps {
  setStep: React.Dispatch<React.SetStateAction<number>>;
  checked: string;
}

const StepTwo = ({ setStep, checked }: IProps) => {
  return (
    <div className="w-full">
      <div className="max-w-[246px] w-full mx-auto mt-3 flex gap-1 items-center">
        <div className="h-[10px] w-[10px] bg-[#0C0957] rounded-full"></div>
        <div className="flex-1 h-1 rounded bg-[#0C0957]"></div>
        <div className="h-[10px] w-[10px] bg-[#0C0957] rounded-full"></div>
        <div className="flex-1 h-1 rounded bg-[#0C0957] "></div>
        <div className="h-[10px] w-[10px] bg-[#E2E2E2] rounded-full"></div>
      </div>
      <div className="mt-5 max-w-[466px] w-full mx-auto shadow-sm p-5 border rounded-md">
        <div className="flex items-center gap-2 mb-5 font-medium text-sm">
          <FaStar />
          <div>{checked === "cyber" ? "Dcyber admin" : "AFN admin"}</div>
        </div>
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
        {checked === "afn" && (
          <Select
            size="md"
            mt={16}
            label="Service"
            placeholder="Select service"
            data={[
              { value: "Nigerian Army", label: "Nigerian Army" },
              { value: "Nigerian Navy", label: "Nigerian Navy" },
              { value: "Nigerian Airforce", label: "Nigerian Airforce" },
              { value: "Nigerian Police", label: "Nigerian Police" },
              { value: "Nigerian Immigration", label: "Immigration" },
            ]}
          />
        )}

        <Button
          color="black"
          size="md"
          className="w-full mt-20 mb-5"
          onClick={() => setStep(3)}
        >
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepTwo;
