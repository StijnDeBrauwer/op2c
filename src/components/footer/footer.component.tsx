import classNames from "classnames";
import React, { FC } from "react";
import "./footer.style.scss";
import { FooterProps } from "./footer.type";

const Footer: FC<FooterProps> = ({ className }) => {
  return (
    <footer className={classNames("footer", className)}>
      <div className="footer-devider"></div>
      <div className="footer-container">
        <div className="footer-text">&copy; OP2C - 2021</div>
      </div>
    </footer>
  );
};

export { Footer };
