import React from "react";
import Logo from "../assets/logo.png";

enum Options {
  OFERTA = "Oferta",
  PROMOCJE = "Promocje",
  CENNIK = "Cennik",
  Kontakt = "Kontakt",
}

const Navbar = () => {
  return (
    <nav className="min-w-[120px] bg-primary1 w-screen font-poppins">
      <div>
        <img src={Logo} alt="logo" className="mix-blend-multiply " />
      </div>

      <ul>
        <li id={`#${Options.OFERTA}`}>{Options.OFERTA}</li>
        <li id={`#${Options.OFERTA}`}>{Options.OFERTA}</li>
        <li id={`#${Options.OFERTA}`}>{Options.OFERTA}</li>
        <li id={`#${Options.OFERTA}`}>{Options.OFERTA}</li>
        <li>Oferta</li>
      </ul>
    </nav>
  );
};

export default Navbar;
