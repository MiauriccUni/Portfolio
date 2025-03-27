import { useState } from "react";
import Nb from "./components/Nb";
import Description from "./components/Description";
import "./assets/App.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Nb />
      <Description />
    </>
  );
}

export default App;
