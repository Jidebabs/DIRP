import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiOutlineClose, AiOutlineMenu } from "react-icons/ai";
import styles from "./Navbar.module.css";
import { Button } from "@mantine/core";
import Logo from "../../../assets/svg/diip.svg";

const Navbar = () => {
  const [menu, setMenu] = useState(false);
  const navigate = useNavigate();

  return (
    <div className="z-[999] bg-white text-black  w-full sticky top-0 shadow-sm">
      <nav
        className={`px-5 lg:px-12 max-w-[1440px] grid grid-cols-2 justify-between ${styles.navbarItems}`}
      >
        <div>
          <img src={Logo} alt="" />
        </div>
        <div
          className={`cursor-pointer pr-2 ${styles.menuIcon}`}
          onClick={() => setMenu(!menu)}
        >
          {menu ? (
            <AiOutlineClose size={25} color="black" />
          ) : (
            <AiOutlineMenu size={25} color="black" />
          )}
        </div>
        <div
          className={`font-medium ${
            menu ? styles.nav_menu + " " + styles.active : styles.nav_menu
          }`}
        >
          <div>About</div>
          <div>Help Center</div>
          <Button color="black" onClick={() => navigate("/")}>
            Sign In
          </Button>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
