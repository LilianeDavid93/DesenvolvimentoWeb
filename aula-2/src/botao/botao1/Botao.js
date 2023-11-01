export default function Botao(props) {
  function mensagem() {
    console.log("Eu sou o botão: ", props.title);
  }

  return (
    <button onClick={mensagem} style={{ marginRight: 10, padding: 15 }}>
      {props.title}
    </button>
  );
}
