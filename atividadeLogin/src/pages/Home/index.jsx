import { Link, useParams } from "react-router-dom";

export default function Home() {
  const { user } = useParams();
  return (
    <>
      <h1>Bem vindo,{user}</h1>

      <nav>
        <ul>
          <li>
            <a href="https://www.google.com" target="_blank">
              Google
            </a>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/contato">Contato</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
