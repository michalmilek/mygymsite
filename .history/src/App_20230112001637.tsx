import { useState } from "react";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Offer from "./components/Offer";
import Promo from "./components/Promo";

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Promo />
      <Info />
      <Offer />
    </div>
  );
}

export default App;
