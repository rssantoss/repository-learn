import React from "react";
import profile from "./rafael.jpg"; // Tell webpack this JS file uses this image

function Header() {
  return (
    <figure className="circle">
      <img src={profile} alt="Logo" />
    </figure>
  );
}

export default Header;
