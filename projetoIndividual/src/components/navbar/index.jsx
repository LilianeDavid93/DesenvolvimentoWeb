import { Link, useParams } from "react-router-dom";

export default function Nav() {
  const { user } = useParams();
  return (
    <>
      <nav className="navbar">
        <h1>Bem vindo</h1>
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
