import { Link, useParams } from "react-router-dom";

export default function Nav() {
  const { user } = useParams();
  return (
    <>
      <h1>Bem vindo,{user}</h1>

      <nav>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/login">Login</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}
