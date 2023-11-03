import "./App.css";
import Controlador from "./components/Controlador";
import HelloWorld from "./components/HelloWorld";
import { useState } from "react";

function App() {
  const [contador, setContador] = useState(0);
  const nomes = ["Liliane"];
  return (
    <>
      <HelloWorld nomes={nomes} />
      <span>{`COUNT:${contador}`}</span>
      <Controlador contador={contador} setContador={setContador}></Controlador>
    </>
  );
}

export default App;
