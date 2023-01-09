import "./App.css";
import { Route, Switch } from "react-router-dom";
import Home from "./components/Home";
import Movies from "./components/pages/Movies";
import MainHeader from "./components/MainHeader.js";
import MovieDetail from "./components/pages/MovieDetail";
function App() {
  return (
    <div>
      <MainHeader />
      <main>
        <Switch>
          {/* http://localhost:3000/home */}
          <Route path="/home">
            <Home />
          </Route>

          {/* http://localhost:3000/movies */}
          <Route path="/movies" exact>
            <Movies />
          </Route>
          {/* define dynamic paths and access the values */}
          {/* <Route path="/movie-detail/:movieId"> */}
          <Route path="/movies/:movieId">
            <MovieDetail />
          </Route>
        </Switch>
      </main>
    </div>
  );
}

export default App;
