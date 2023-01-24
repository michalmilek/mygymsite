import { useState } from "react";
import { ContactUs } from "./components/ContactUs";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import PriceList from "./components/PriceList";
import Promo from "./components/Promo";
import Promotions from "./components/Promotions";
import Sponsors from "./components/Sponsors";

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Promo />
      <Info />
      <Offer />
      <Promotions />
      <PriceList />
      <Sponsors />
      {/* <ContactUs /> */}
    </div>
  );
}

export default App;
