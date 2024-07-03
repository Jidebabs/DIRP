import { Fragment } from "react";
import Navbar from "../../../components/Unauthenticated/components/Navbar";
import Footer from "../../../components/Unauthenticated/components/Footer";
import { useEffect } from "react";

const Landing = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <Fragment>
      <div className="flex cc">
        <div className="flex">
          <div className="min-h-screen w-4 bg-[#D43423]" />
          <div className="min-h-screen w-4 bg-[#0C0957]" />
          <div className="min-h-screen w-4 bg-[#21A1D6]" />
        </div>
        <div className="min-h-screen flex flex-col justify-between flex-1">
          <div className="w-full">
            <Navbar />
          </div>
          <div className="flex-1 px-5 lg:px-10">
            <div className="text-[48px] font-bold mt-20">
              Compelling Heading Here
            </div>
            <div className="mt-3 sm:text-lg font-semibold max-w-[800px]">
              Defence Incidence Response Platform. lorem here and there. Why
              this is important something can go here. Or here. or here. Let’s
              just keep repeating cos this is the new lorem ipsum made
              professional. Defence Incidence Response Platform . lorem here and
              there. Why this is important hey there akssss, do I know something
              can go here. Or here. or here. Let’s just keep repeating cos this
              is the new lorem ipsum made l professional.{" "}
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
