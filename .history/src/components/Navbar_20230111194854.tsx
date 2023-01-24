import React from "react";
import Logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="min-w-[120px] bg-primary1 w-screen">
      <div>
        <img src={Logo} alt="logo" className="mix-blend-multiply" />
      </div>
    </nav>
  );
};

export default Navbar;
