import { Button, Radio } from "@mantine/core";

const StepOne = () => {
  return (
    <div>
      <div className="max-w-[246px] w-full mx-auto mt-3 flex gap-1 items-center">
        <div className="h-[10px] w-[10px] bg-[#0C0957] rounded-full"></div>
        <div className="flex-1 h-1 rounded bg-[#0C0957]"></div>
        <div className="h-[10px] w-[10px] bg-[#E2E2E2] rounded-full"></div>
        <div className="flex-1 h-1 rounded bg-[#E2E2E2] "></div>
        <div className="h-[10px] w-[10px] bg-[#E2E2E2] rounded-full"></div>
      </div>
      <div className="mt-5 max-w-[466px] w-full mx-auto shadow-sm p-5 border rounded-md">
        <div className="mb-5 font-medium">Sign up as...</div>
        <Radio
          color="black"
          className="w-full"
          label={
            <div>
              <div className="test-sm font-medium text-sm text-black">
                A Dcyber admin
              </div>
              <div className="text-xs font-normal text-[#828282]">
                An account for Dcyber analysts who report vulnerabilities{" "}
              </div>
            </div>
          }
        />
        <Radio
          color="black"
          mt={20}
          label={
            <div>
              <div className="test-sm font-medium text-sm text-black">
                An AFN admin
              </div>
              <div className="text-xs font-normal text-[#828282]">
                An account for AFN admins to receive info and act on them
              </div>
            </div>
          }
        />
        <Button color="black" size="md" className="w-full mt-20 mb-5">
          Continue
        </Button>
      </div>
    </div>
  );
};

export default StepOne;
