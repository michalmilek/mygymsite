import { useState } from "react";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import PriceList from "./components/PriceList";
import Promo from "./components/Promo";
import Promotions from "./components/Promotions";

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Promo />
      <Info />
      <Offer />
      <Promotions />
      <PriceList />
    </div>
  );
}

export default App;
