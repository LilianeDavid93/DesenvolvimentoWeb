import "./App.css";
import Gatinho from "./Gato";

function Gatinhos() {
  const gatos = [
    {
      id: "2nm",
      url: "https://cdn2.thecatapi.com/images/2nm.jpg",
      width: 500,
      height: 332,
    },
    {
      id: "3to",
      url: "https://cdn2.thecatapi.com/images/3to.jpg",
      width: 500,
      height: 378,
    },
    {
      id: "8gk",
      url: "https://cdn2.thecatapi.com/images/8gk.gif",
      width: 219,
      height: 300,
    },
    {
      id: "8to",
      url: "https://cdn2.thecatapi.com/images/8to.jpg",
      width: 600,
      height: 600,
    },
    {
      id: "asu",
      url: "https://cdn2.thecatapi.com/images/asu.jpg",
      width: 980,
      height: 735,
    },
    {
      id: "bio",
      url: "https://cdn2.thecatapi.com/images/bio.jpg",
      width: 500,
      height: 333,
    },
    {
      id: "cho",
      url: "https://cdn2.thecatapi.com/images/cho.jpg",
      width: 480,
      height: 360,
    },
    {
      id: "dga",
      url: "https://cdn2.thecatapi.com/images/dga.jpg",
      width: 846,
      height: 520,
    },
    {
      id: "Dm0H1zSK1",
      url: "https://cdn2.thecatapi.com/images/Dm0H1zSK1.jpg",
      width: 1024,
      height: 768,
    },
    {
      id: "yCd1pVi7Y",
      url: "https://cdn2.thecatapi.com/images/yCd1pVi7Y.jpg",
      width: 1800,
      height: 2000,
    },
  ];

  return (
    <div>
      <h1>Gatos fofos</h1>
      {gatos.map((gato) => (
        <Gatinho key={gato.id} gato={gato} />
      ))}
    </div>
  );
}

export default Gatinhos;
