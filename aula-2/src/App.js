import "./App.css";
import Bio from "./components/Bio";
import Botao from "./botao/botao1/Botao";

function App() {
  const pessoas = [
    { nome: "Liliane", idade: 30 },
    { nome: "Sara", idade: 28 },
    { nome: "Joana", idade: 67 },
  ];
  const titulos = [
    { titulo: "Editar" },
    { titulo: "Salvar" },
    { titulo: "Excluir" },
  ];

  return (
    <div className="App">
      <h1>Aula 02</h1>
      {/* Comentário 
      <Bio nome="Liliane" idade="30" />
      <Bio nome={pessoas[1].nome} idade={pessoas[1].idade} />
      <Bio nome={pessoas[1].nome} idade={pessoas[1].idade} />
    */}

      {titulos.map((item, index) => (
        <Botao key={index} nome={item.nome} idade={item.idade} />
      ))}

      {pessoas.map((titulo, index) => (
        <Bio key={index} title={titulo.titulo} />
      ))}

      {/* <Botao title="Editar" />
      <Botao title="Salvar" />
      <Botao title="Excluir" /> */}
    </div>
  );
}

export default App;
