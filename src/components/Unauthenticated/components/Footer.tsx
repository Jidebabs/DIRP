import Logo from "../../../assets/svg/diip.svg";
const Footer = () => {
  return (
    <div className="border-t py-4">
      <div className="app-width flex flex-col sm:flex-row justify-between gap-5 items-center">
        <div className="">
          <img src={Logo} alt="" className="mx-auto sm:mx-[unset]" />
          <div className="text-sm mt-2">
            By <span className="font-bold">Defence Space Administration</span>
          </div>
        </div>
        <div className="flex items-center gap-5 text-sm text-[#28282B] font-medium">
          <div className="cursor-pointer">Our Mission</div>
          <div className="cursor-pointer">Privacy policy</div>
          <div className="cursor-pointer">Contact us</div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
