import { useState } from "react";
import { useNavigate, useParams, useLocation } from "react-router-dom";
import "./style.css";

const dados = {
  login: "Liliane",
  senha: "@123",
};

export default function Login() {
  const [login, setLogin] = useState("");
  const [senha, setSenha] = useState("");

  const navigate = useNavigate();
  const { parametro } = useParams();
  const { state } = useLocation();
  console.log(state);

  // function entrar(){}
  const entrar = () => {
    console.log("FUNCAO ENTRAR");
    if (login == "" || senha == "") {
      console.log("Preencha os campo de login e senha");
    } else if (login == dados.login && senha == dados.senha) {
      const info = {
        login: login,
        senha: senha,
      };
      console.log(info);

      localStorage.setItem("info", JSON.stringify(info));

      setLogin("");
      setSenha("");

      // navigate("/home/" + login);
      // navigate(`/${login}`);
      navigate("/home");
    } else {
      alert("Login ou Senha Inválidos!");
    }
  };
  return (
    <div className="login">
      <div>
        <form className="form">
          <h1>Página de Login</h1>
          <input
            type="text"
            placeholder="Digite Seu login"
            value={login}
            onChange={(e) => setLogin(e.target.value)}
          />
          <br />
          <input
            type="password"
            placeholder="Digite Sua Senha"
            value={senha}
            onChange={(e) => setSenha(e.target.value)}
          />
          <br />
          <button className="botaouniversal" type="button" onClick={entrar}>
            Entrar
          </button>
        </form>
      </div>
    </div>
  );
}
