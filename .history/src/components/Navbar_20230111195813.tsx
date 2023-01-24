import React from "react";
import Logo from "../assets/logo.png";

enum Options {
  OFERTA = "Oferta",
  PROMOCJE = "Promocje",
  CENNIK = "Cennik",
  KONTAKT = "Kontakt",
}

const button = "px-6 py-4 text-xl";
const ht = "transition";

const Navbar = () => {
  return (
    <nav className="min-w-[120px] bg-primary1 w-screen font-poppins flex justify-between items-center px-80">
      <div>
        <img src={Logo} alt="logo" className="mix-blend-multiply " />
      </div>

      <ul className="flex">
        <li className={`${button} font-bold`} id={`#${Options.OFERTA}`}>
          {Options.OFERTA}
        </li>
        <li
          className={`${button} hover:text-secondary1 hover:scale-110 transition-all duration-150`}
          id={`#${Options.PROMOCJE}`}>
          {Options.PROMOCJE}
        </li>
        <li className={`${button}`} id={`#${Options.CENNIK}`}>
          {Options.CENNIK}
        </li>
        <li className={`pl-6 py-4 text-xl`} id={`#${Options.KONTAKT}`}>
          {Options.KONTAKT}
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
