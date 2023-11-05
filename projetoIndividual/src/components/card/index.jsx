import "./style.css";

const card = ({ produto }) => {
  return (
    <div className="card-container">
      <div className="left-side">
        <img src={produto.imgurl} alt="" />
      </div>
      <div className="rigth-side">
        <span id="card-title">{produto.nome}</span>
        <span>
          <strong>Preco:</strong> R$ {produto.preco}
        </span>
        <span>
          <strong>Quantidade:</strong> {produto.quantidade}
        </span>
      </div>
    </div>
  );
};
export default card;
