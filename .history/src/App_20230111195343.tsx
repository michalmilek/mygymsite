import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="App scroll-smooth">
      <Navbar />
      <h1 className="text-3xl font-poppins">TAILWIND</h1>
    </div>
  );
}

export default App;
