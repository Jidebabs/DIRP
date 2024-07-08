import AuthHeader from "../../../components/Unauthenticated/components/AuthHeader";
import AuthFooter from "../../../components/Unauthenticated/components/AuthFooter";

interface IProps {
  children: React.ReactNode;
}
const AuthLayout = ({ children }: IProps) => {
  return (
    <div className="flex w-full min-h-screen">
      <div className="flex">
        <div className="min-h-screen w-4 bg-[#D43423]" />
        <div className="min-h-screen w-4 bg-[#0C0957]" />
        <div className="min-h-screen w-4 bg-[#21A1D6]" />
      </div>
      <div className="w-full flex flex-col justify-between">
        <AuthHeader />
        <div className="flex-1">{children}</div>
        <AuthFooter />
      </div>
    </div>
  );
};

export default AuthLayout;
