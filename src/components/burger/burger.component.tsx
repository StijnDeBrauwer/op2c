import React, { FC } from "react";
import { StyledBurger } from "./burger.styled";
import { BurgerProps } from "./burger.type";

const Burger: FC<BurgerProps> = ({ open, setOpen }) => {
  const isExpanded = open ? true : false;

  return (
    <StyledBurger
      aria-label="Toggle menu"
      aria-expanded={isExpanded}
      open={open}
      onClick={() => setOpen(!open)}
    >
      <span />
      <span />
      <span />
    </StyledBurger>
  );
};

export { Burger };
