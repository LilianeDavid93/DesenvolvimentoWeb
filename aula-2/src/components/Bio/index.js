export default function Bio({ nome, idade }) {
  console.log(nome, idade);
  return (
    <div>
      <h1>BIO</h1>
      <h2>Nome: {nome}</h2>
      <h2>Idade: {idade}</h2>
    </div>
  );
}
