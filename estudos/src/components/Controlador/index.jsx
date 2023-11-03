import "./style.css";

export default function Controlador({ contador, setContador }) {
  function UpdateValue(value) {
    if (value === -1) {
      if (contador > 0) {
        setContador(contador - 1);
      }
      return;
    }
    setContador(contador + 1);
  }
  return (
    <div className="button">
      <button onClick={() => UpdateValue(-1)}>Decremento(-1)</button>
      <button onClick={() => UpdateValue(+1)}>Incremento(+1)</button>
    </div>
  );
}
