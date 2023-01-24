import { useState } from "react";
import Navbar from "./components/Navbar";
import Promo from "./components/Promo";

function App() {
  return (
    <div className="App scroll-smooth">
      <Navbar />
      <Promo />
    </div>
  );
}

export default App;
