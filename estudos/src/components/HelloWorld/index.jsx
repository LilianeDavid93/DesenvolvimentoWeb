export default function HelloWorld({ nomes }) {
  return nomes.map((nome, i) => {
    return <h1 key={i}>Hello, {nome} </h1>;
  });
}
