import { Button } from "@mantine/core";
import Logo from "../../../assets/svg/diip.svg";
import { useNavigate } from "react-router-dom";

const AuthHeader = () => {
  const navigate = useNavigate();
  return (
    <div className="px-5 max-w-[1440px] w-full flex justify-between h-[80px] items-center border-b">
      <img src={Logo} alt="" />

      <Button color="black" onClick={() => navigate("/")} className="px-8">
        Sign In
      </Button>
    </div>
  );
};

export default AuthHeader;
