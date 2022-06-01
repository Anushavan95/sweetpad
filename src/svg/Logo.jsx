import React from "react";
import logo from "../svg/HeaderLogo.svg";
export default function Logo() {
  return (
    <a href="https://sweetpad.io">
      <img className="logo-sweet-desktop" src={logo} alt="logo" />
    </a>
  );
}
