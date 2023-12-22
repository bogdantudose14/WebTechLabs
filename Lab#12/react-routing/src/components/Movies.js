import { Link } from "react-router-dom";
// Link is a React component similar to an <a> tag with the href attribute set, but the
// default behaviour is prevented.

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
