import { useState } from "react";
import AuthFooter from "../../../components/Unauthenticated/components/AuthFooter";
import AuthHeader from "../../../components/Unauthenticated/components/AuthHeader";
import StepOne from "./components/StepOne";
import StepTwo from "./components/StepTwo";
import { useNavigate } from "react-router-dom";
import StepThree from "./components/StepThree";

const Register = () => {
  const [step, setStep] = useState(1);
  const [checked, setChecked] = useState("");
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
        <div className="flex-1 flex flex-col justify-center items-center p-5 overflow-auto">
          <div className="text-[36px] font-bold text-center">
            Create an account
          </div>
          <div className="mt-1 text-center">
            Enter your details below to create an account
          </div>
          {step === 1 && (
            <StepOne
              setStep={setStep}
              checked={checked}
              setChecked={setChecked}
            />
          )}
          {step === 2 && <StepTwo setStep={setStep} checked={checked} />}
          {step === 3 && <StepThree checked={checked} />}
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
            <span className="underline font-medium">
              Terms of Use{" "}
            </span> and{" "}
            <span className="underline font-medium">Privacy Policy.</span>
          </div>
        </div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default Register;
