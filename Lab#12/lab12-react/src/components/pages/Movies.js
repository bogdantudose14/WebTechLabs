import { Link } from "react-router-dom";

function Movies() {
  return (
    <section>
      <h1>The Movies Page</h1>
      <ul>
        <li>
          <Link to="/movies/titanic">Titanic</Link>
        </li>
        <li>
          <Link to="/movies/avatar">Avatar</Link>
        </li>
        <li>
          <Link to="/movies/goodfellas">GoodFellas</Link>
        </li>
      </ul>
    </section>
  );
}

export default Movies;
