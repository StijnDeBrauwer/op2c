import React, { FC, useState } from "react";
import { useHistory, useLocation } from "react-router-dom";
import classnames from "classnames";
import { HeaderProps } from "./header.type";
import { Routes } from "../../navigation/routes.const";
import "./header.style.scss";
import { Burger } from "../burger/burger.component";
import { Menu } from "../menu/menu.component";
import logo from "../../assets/images/logo.png";

const Header: FC<HeaderProps> = ({ className }) => {
  const [open, setOpen] = useState(false);
  const menuId = "main-menu";

  const location = useLocation();
  const history = useHistory();

  const currentRouteName =
    Routes.find((route) => route.route === location.pathname)?.label || "Home";

  const navigateToHome = () => {
    history.push("/");
  };

  return (
    <nav className={classnames("header", classnames)}>
      <Burger open={open} setOpen={setOpen} aria-controls={menuId} />
      <Menu open={open} setOpen={setOpen} id={menuId} />

      {currentRouteName}

      <div className="logo-container">
        <img onClick={navigateToHome} src={logo} alt="logo" />
      </div>
    </nav>
  );
};

export { Header };
