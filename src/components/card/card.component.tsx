import React, { FC } from "react";
import classnames from "classnames";
import { CardProps } from "./card.type";
import { Colors } from "../../assets";

import "./card.style.scss";

const Card: FC<CardProps> = ({
  backgroundColor = Colors.primary,
  className,
  children,
  onClick,
}: CardProps) => {
  return (
    <div
      onClick={onClick}
      style={{ backgroundColor }}
      className={classnames("card", className)}
    >
      {children}
    </div>
  );
};

export { Card };
