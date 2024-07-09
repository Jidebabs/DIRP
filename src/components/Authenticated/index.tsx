import { useDisclosure } from "@mantine/hooks";
import Logo from "../../assets/svg/diip.svg";
import {
  MdKeyboardDoubleArrowLeft,
  MdKeyboardDoubleArrowRight,
} from "react-icons/md";
import SideNav from "./SideNav";
import { Fragment } from "react";
import { Drawer } from "@mantine/core";
import { Routes } from "react-router-dom";

import { useDispatch, useSelector } from "react-redux";
import { RootState } from "../../redux/store";
import { closeModal } from "../../redux/features/modalSlice";

const Authenticated = () => {
  const [opened, { toggle }] = useDisclosure();
  const dispatch = useDispatch();

  const isOpen = useSelector((state: RootState) => state.user.modal.isOpen);
  const close = () => dispatch(closeModal());

  return (
    <Fragment>
      <Drawer opened={isOpen} onClose={close} title="Authentication">
        <SideNav opened={opened} close={close} />
      </Drawer>
      <div className="flex items-start bg-[#F8F9FD]">
        <div
          className={`hidden lg:flex flex-col sticky pb-7 top-0 min-h-screen bg-white w-full px-5 duration-300 ${
            !opened ? "max-w-[270px]" : "max-w-[100px] pt-5"
          }`}
        >
          <div
            className={`flex justify-between items-center gap-2 border-b ${
              opened ? "flex-col" : "flow-row"
            }`}
          >
            <img
              src={Logo}
              alt=""
              className={`${opened ? "order-2" : "order-1"}`}
            />
            <>
              {opened && (
                <MdKeyboardDoubleArrowRight
                  className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
                  onClick={toggle}
                />
              )}
              {!opened && (
                <MdKeyboardDoubleArrowLeft
                  className={`cursor-pointer ${opened ? "order-1" : "order-2"}`}
                  onClick={toggle}
                />
              )}
            </>
          </div>
          <div className="hidden lg:grid gap-4 mt-5 flex-1 h-full">
            <SideNav opened={opened} close={close} />
          </div>
        </div>

        <div className="w-full min-h-screen px-5 lg:px-10 pb-10 overflow-hidden">
          <Routes></Routes>
        </div>
      </div>
    </Fragment>
  );
};

export default Authenticated;
