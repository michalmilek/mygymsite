import { useState } from "react";
import Info from "./components/Info";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Promo />
      <Info />
    </div>
  );
}

export default App;
