import React from "react";
import Logo from "../assets/logo.png";

enum Options {
  OFERTA = "Oferta",
  PROMOCJE = "Promocje",
  CENNIK = "Cennik",
  SPONSORS = "Sponsorzy",
  KONTAKT = "Kontakt",
}

const button = "px-6 py-4 text-xl";
const ht = "hover:text-white hover:scale-110 transition-all duration-300";

const Navbar = () => {
  return (
    <nav className="h-[120px] scroll-smooth bg-primary1 w-screen font-poppins flex justify-between items-center px-80">
      <div>
        <img src={Logo} alt="logo" className="mix-blend-multiply " />
      </div>

      <ul className="flex cursor-pointer">
        <li
          className={`${button} hover:scale-110 transition-all duration-300 font-bold`}
          id={`#${Options.OFERTA}`}>
          {Options.OFERTA}
        </li>
        <li className={`${button} ${ht}`} id={`#${Options.PROMOCJE}`}>
          {Options.PROMOCJE}
        </li>
        <li className={`${button} ${ht}`} id={`#${Options.CENNIK}`}>
          {Options.CENNIK}
        </li>
        <li className={`${ht} pl-6 py-4 text-xl`} id={`#${Options.KONTAKT}`}>
          <a href="#contact">{Options.KONTAKT}</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
