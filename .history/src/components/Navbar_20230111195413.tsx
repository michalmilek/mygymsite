import React from "react";
import Logo from "../assets/logo.png";

enum Options {
  OFERTA = "Oferta",
  PROMOCJE = "Promocje",
  CENNIK = "Cennik",
  KONTAKT = "Kontakt",
}

const Navbar = () => {
  return (
    <nav className="min-w-[120px] bg-primary1 w-screen font-poppins flex justify-between items-center">
      <div>
        <img src={Logo} alt="logo" className="mix-blend-multiply " />
      </div>

      <ul>
        <li id={`#${Options.OFERTA}`}>{Options.OFERTA}</li>
        <li id={`#${Options.PROMOCJE}`}>{Options.PROMOCJE}</li>
        <li id={`#${Options.CENNIK}`}>{Options.CENNIK}</li>
        <li id={`#${Options.KONTAKT}`}>{Options.KONTAKT}</li>
      </ul>
    </nav>
  );
};

export default Navbar;
