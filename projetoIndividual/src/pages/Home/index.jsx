import Nav from "../../components/navbar";
import "./style.css";
import Card from "../../components/card";
import Produtos from "../../produtos.json";
import Search from "../../components/search";
import { useEffect, useState } from "react";

function Home() {
  const [inputSearch, setInputSearch] = useState("");
  const [filteredList, setFilteredList] = useState([]);

  useEffect(() => {
    setFilteredList(
      Produtos.filter((p) =>
        p.nome.toLowerCase().includes(inputSearch.toLowerCase())
      )
    );
  }, [inputSearch]);

  return (
    <>
      <Nav />
      <div className="logo">
        <div className="titulo">
          Bem-vindo ao nosso universo de tecnologia!
          <br />
          Explore o futuro, descubra inovações e encontre os melhores produtos
          eletrônicos para tornar sua vida mais conectada e eficiente.
          <br />
          Estamos empolgados em tê-lo conosco.
          <br />
          <br />
          Vamos começar a explorar juntos!
        </div>
      </div>
      <Search inputSearch={inputSearch} setInputSearch={setInputSearch} />
      <div className="card-section">
        {filteredList.length > 0
          ? filteredList.map((produto, i) => {
              return <Card key={i} produto={produto} />;
            })
          : Produtos.map((produto, i) => {
              return <Card key={i} produto={produto} />;
            })}
      </div>
      <div className="rodape"></div>
    </>
  );
}
export default Home;
