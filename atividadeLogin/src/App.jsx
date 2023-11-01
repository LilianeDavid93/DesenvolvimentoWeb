import "./App.css";
import Login from "./pages/Login";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Contato from "./pages/Contato";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/home/:user" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/contato" element={<Contato />} />
      <Route path="/login/:parametro" element={<Login />} />
      <Route path="*" element={<h1>Pagina Não Encontrada</h1>} />
    </Routes>
  );
}

export default App;
