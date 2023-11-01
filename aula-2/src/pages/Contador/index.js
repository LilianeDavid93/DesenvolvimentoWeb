import { useState } from "react";
import

function Contador() {
  //   let count = 33;
  const [count, setCount] = useState(0);

  function somar() {
    // count++;
    setCount(count + 1);
    console.log("Contador: ", count);
  }

  return (
    <div className="container">
      <h1>CONTADOR</h1>
      <p className="contador">{count}</p>

      <button onClick={somar}>Adicionar + 1</button>
    </div>
  );
}

export default Contador;
