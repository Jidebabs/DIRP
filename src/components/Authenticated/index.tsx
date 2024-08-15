import { AppShell, Avatar, Burger, Button } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/svg/diip.svg";
import { DashboardIcon } from "./Svg";
import { FaPlus } from "react-icons/fa6";
import { Route, Routes, useLocation, useNavigate } from "react-router-dom";
import { LuFiles } from "react-icons/lu";
import { LuSettings } from "react-icons/lu";
import { MdOutlineNotifications } from "react-icons/md";
import Dashboard from "../../pages/authenticated/Dashboard";
import Report from "../../pages/authenticated/Report";
import Settings from "../../pages/authenticated/Settings";
import Notification from "../../pages/authenticated/Notification";
import ReportDetails
 from "../../pages/authenticated/ReportDetails";
import { Fragment } from "react/jsx-runtime";
import ReportVulnurebility from "../../pages/authenticated/Dashboard/components/ReportVulnurebility";

function Authenticated() {
  const [opened, { toggle }] = useDisclosure();
  const location = useLocation();
  const navigate = useNavigate();
  const [openedReport, { open, close }] = useDisclosure();

  return (
    <Fragment>
      <ReportVulnurebility close={close} opened={openedReport} />
      <AppShell
        header={{ height: !opened ? 80 : 0 }}
        navbar={{
          width: 280,
          breakpoint: "md",
          collapsed: { mobile: !opened },
        }}
        padding="32px"
      >
        {!opened && (
          <AppShell.Header className="app-md:w-[calc(100%-280px)] ml-auto flex items-center shadow-sm">
            <div className="flex items-center justify-between px-3 w-full">
              <div className="flex items-center gap-3">
                <Burger
                  opened={opened}
                  onClick={toggle}
                  hiddenFrom="md"
                  size="sm"
                />
                <div className="flex items-center gap-3">
                  <Avatar size="lg" />
                  <div className="text-sm font-semibold">
                    <div>Adaji Mukhtar</div>
                    <div className="text-[#9D9D9D]">alfadaji@gmail.com</div>
                  </div>
                </div>
              </div>
              {location.pathname === "/" && (
                <>
                  <Button
                    leftSection={<FaPlus />}
                    color="black"
                    className="hidden sm:block"
                    onClick={open}
                  >
                    Report vulnerability
                  </Button>
                  <div
                    className="h-[40px] w-[40px] rounded-full flex justify-center items-center bg-black sm:hidden cursor-pointer"
                    onClick={open}
                  >
                    <FaPlus color="white" />
                  </div>
                </>
              )}
            </div>
          </AppShell.Header>
        )}

        <AppShell.Navbar className="app-md:mt-[-80px] h-full">
          <div className="flex">
            <div className="flex">
              <div className="min-h-screen w-4 bg-[#D43423]" />
              <div className="min-h-screen w-4 bg-[#0C0957]" />
              <div className="min-h-screen w-4 bg-[#21A1D6]" />
            </div>
            <div className="p-5 w-full">
              <div className="flex w-full justify-between">
                <img src={Logo} alt="" className="Dirp" />
                {opened && (
                  <Burger
                    opened={opened}
                    onClick={toggle}
                    hiddenFrom="md"
                    size="sm"
                  />
                )}
              </div>
              <div className="mt-20 grid gap-6">
                <div
                  className={`flex gap-3 cursor-pointer ${
                    location.pathname === "/" ? "font-bold" : "font-normal"
                  } `}
                  onClick={() => navigate("/")}
                >
                  <DashboardIcon />
                  <div className=" text-black">Dashboard</div>
                </div>
                <div
                  className={`flex gap-3 cursor-pointer ${
                    location.pathname.includes("/report")
                      ? "font-bold"
                      : "font-normal"
                  } `}
                  onClick={() => navigate("/report")}
                >
                  <LuFiles size={24} />
                  <div className="Dashboard text-black">Reports</div>
                </div>
                <div
                  className={`flex gap-3 cursor-pointer ${
                    location.pathname.includes("/settings")
                      ? "font-bold"
                      : "font-normal"
                  } `}
                  onClick={() => navigate("/settings")}
                >
                  <LuSettings size={24} />
                  <div className="Dashboard text-black">Settings</div>
                </div>
                <div
                  className={`flex gap-3 cursor-pointer ${
                    location.pathname.includes("/notifications")
                      ? "font-bold"
                      : "font-normal"
                  } `}
                  onClick={() => navigate("/notifications")}
                >
                  <MdOutlineNotifications size={26} />
                  <div className="Dashboard text-black">Notifications</div>
                </div>
              </div>
            </div>
          </div>
        </AppShell.Navbar>

        <AppShell.Main className="mt-5 bg-[#f9f9fb]">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/report">
              <Route index element={<Report />} />
              <Route path=":reportId" element={<ReportDetails />} />
            </Route>
            <Route path="/settings" element={<Settings />} />
            <Route path="/notifications" element={<Notification />} />
          </Routes>
        </AppShell.Main>
      </AppShell>
    </Fragment>
  );
}

export default Authenticated;
