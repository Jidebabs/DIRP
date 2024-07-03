import { useLocation, useNavigate } from "react-router-dom";
import {
  DashboardIcon,
  DeliveryIcon,
  InvoiceIcon,
  OrderIcon,
  PaymentIcon,
  UserIcon,
} from "./Svg";
import { CiLogout } from "react-icons/ci";
import { Fragment } from "react";
import { useDisclosure } from "@mantine/hooks";
import ConfirmLogout from "./ConfirmLogout";

interface IProps {
  opened: boolean;
  close: () => void;
}

const SideNav = ({ opened, close }: IProps) => {
  const [showLogoutModal, { open, close: closeLogoutModal }] = useDisclosure();

  const location = useLocation();
  const navigate = useNavigate();

  const route = [
    {
      name: "Dashboard",
      icon: <DashboardIcon />,
      url: "/",
    },
    {
      name: "Customer Data",
      icon: <UserIcon />,
      url: "/customer-data",
    },
    {
      name: "Shipping Labels",
      icon: <DeliveryIcon />,
      url: "/shipping-labels",
    },
    {
      name: "Orders & Tracking",
      icon: <OrderIcon />,
      url: "/orders-&-tracking",
    },
    {
      name: "Invoice",
      icon: <InvoiceIcon />,
      url: "/invoice",
    },
    {
      name: "Payment History",
      icon: <PaymentIcon />,
      url: "/payment-history",
    },
  ];

  return (
    <Fragment>
      <ConfirmLogout close={closeLogoutModal} opened={showLogoutModal} />
      <div className="flex-1 flex flex-col justify-between max-h-screen h-full gap-5">
        <div className="grid gap-5">
          {route.map((item, index) => (
            <div
              className={`flex items-center gap-5 cursor-pointer p-2 whitespace-nowrap rounded-md text-sm ${
                location.pathname === item.url
                  ? "bg-primary/5 text-primary font-medium"
                  : "text-[#828282]"
              } ${opened ? "w-max" : ""}`}
              onClick={() => {
                navigate(item.url);
                close();
              }}
              key={index}
            >
              {item.icon}
              {opened ? null : item.name}
            </div>
          ))}
        </div>
        <div
          className="flex items-center text-sm p-2 cursor-pointer gap-5"
          onClick={open}
        >
          <CiLogout size={20} />
          {!opened && <div>Log Out</div>}
        </div>
      </div>
    </Fragment>
  );
};

export default SideNav;
