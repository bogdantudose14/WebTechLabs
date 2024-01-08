import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Home from './components/Home'
import Movies from './components/Movies'
import MainHeader from './components/MainHeader.js'
import MovieDetail from './components/MovieDetail'

// Client-Side routing

function App () {
  // #region REACT-ROUTER-DOM V6

  return (
    <div>
      <BrowserRouter>
        <MainHeader />
        <Routes>
          <Route path='/home' element={<Home />}></Route>
          <Route path='/movies' element={<Movies />}></Route>
          {/* define dynamic paths and access the values */}
          <Route path='/movies/:movieId' element={<MovieDetail />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  )
  // #endregion
  // #region REACT-ROUTER-DOM V5
  //By using the “Switch” component, only one of the routes will be active at the same time => the route which is matched first!
  //  => not the more specific one!
  //One solution would be to change the order (React router goes through your routes top to bottom).
  //Another solution is to use the ‘exact’ prop.
  // return (
  //   <div>
  //     <BrowserRouter>
  //       <MainHeader />
  //       <main>
  //         <Switch>
  //           {/* http://localhost:3000/home */}
  //           <Route path="/home">
  //             <Home />
  //           </Route>
  //           {/* http://localhost:3000/movies */}
  //           <Route path="/movies" exact>
  //             <Movies />
  //           </Route>
  //           {/* define dynamic paths and access the values */}
  //           {/* <Route path="/movie-detail/:movieId"> */}
  //           <Route path="/movies/:movieId">
  //             <MovieDetail />
  //           </Route>
  //         </Switch>
  //       </main>
  //     </BrowserRouter>
  //   </div>
  // );
  // #endregion
}

export default App
