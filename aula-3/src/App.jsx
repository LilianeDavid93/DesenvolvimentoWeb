import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [nome, setNome] = useState("");
  const [mostrar, setMostrar] = useState("");
  const [email, setEmail] = useState("");
  const [idade, setIdade] = useState(0);

  const prova = () => {
    setMostrar(nome);
    console.log("EU SOU A FUNÇÃO PROVA!!!!");
    console.log("1");
    setCount((prevState) => prevState + 1);
    console.log("2");
    setCount((count) => count + 1);
    console.log("3");
    setCount((count) => count + 1);
    setNome("Alterei o nome na TELA");
    console.log("FINAL DA FUNÇÃOOOO!");
  };

  const cadastrar = () => {
    const infos = {
      nome: nome,
      email: email,
      idade: idade,
    };
    console.log(infos);
    setNome("");
    setEmail("");
    setIdade(0);

    localStorage.setItem("info", JSON.stringify(infos));
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>{mostrar}</h1>
      <div>
        <input
          type="text"
          placeholder="Digite Seu Nome"
          value={nome}
          onChange={(e) => setNome(e.target.value)}
        />
      </div>
      <div>
        <input
          type="email"
          placeholder="Digite Seu EMAIL"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="number"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
      </div>
      <div className="card">
        <button onClick={cadastrar}>Cadastrar</button>
      </div>
      <div className="card">
        <button onClick={prova}>count is {count}</button>
        <p>
          Edit <code>src/App.jsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
