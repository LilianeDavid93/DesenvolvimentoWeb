import Nav from "../../components/navbar";
import "./style.css";
import img from "../../components/imagens/ponei3.png";
import img2 from "../../components/imagens/pone1.jpeg";
import img3 from "../../components/imagens/ponei2.jpeg";
import img4 from "../../components/imagens/ponei4.jpeg";
import img5 from "../../components/imagens/ponei5.jpeg";

function Home() {
  return (
    <>
      <Nav />
      <div className="logo">
        <div className="titulo">
          Bem-vindo ao nosso mágico mundo de desenhos de pôneis!
          <br /> Se você é um fã apaixonado de pôneis adoráveis, aventuras
          encantadoras e criatividade sem limites, você veio ao lugar certo.
          <br />
          Nosso site é o destino definitivo para todos os amantes de pôneis e
          entusiastas de desenho.
        </div>
        <div className="imgs">
          <img src={img} alt="Ponei" />
          <img src={img2} alt="Ponei" />
          <img src={img3} alt="Ponei" />
          <img src={img4} alt="Ponei" />
          <img src={img5} alt="Ponei" />
        </div>
      </div>

      <div className="rodape"></div>
    </>
  );
}
export default Home;
