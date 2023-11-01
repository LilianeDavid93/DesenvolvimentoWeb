import React from "react";
import Gatinhos from "../gatinho";

const Gatinho = ({ gato }) => {
  console.log(gato);
  return (
    <div>
      <img src={gato.url} />
    </div>
  );
};
export default Gatinho;
