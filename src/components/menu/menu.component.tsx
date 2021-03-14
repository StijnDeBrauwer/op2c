import React, { FC } from "react";
import { Link } from "react-router-dom";
import { Routes } from "../../navigation/routes.const";
import { StyledMenu } from "./menu.styled";
import { MenuProps } from "./menu.type";
import "./menu.styled.ts";

const Menu: FC<MenuProps> = ({ open, setOpen, ...props }) => {
  return (
    <StyledMenu open={open} {...props}>
      {Routes.map((route) => (
        <Link to={route.route} onClick={() => setOpen(false)}>
          <span className="menu__link">{route.label}</span>
        </Link>
      ))}
    </StyledMenu>
  );
};

export { Menu };
