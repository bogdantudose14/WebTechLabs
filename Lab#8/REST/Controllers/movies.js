import { movies } from '../Database/moviesDatabase.js';

// A controller is a component of different design patterns which usually controls the requests of the user
// and then generates appropriate responses which are fed to the viewer.
// Typically, the user interacts with the View, which in turn generates the appropriate request, this request will be handled by a controller.
// The controller renders the appropriate view with the model data as a response.
// So, to sum it up:
// Model is data part.
// View is the User Interface part.
// Controller is request-response handler.

//Define the callbacks for the router in here and export them as methods

// get all movies w/ the possibility of filtering by genre
const getAllMovies = async (req, res) => {
  let filteredMovies;
  if (req.query.genre) {
    filteredMovies = movies.filter((movie) => movie.genre === req.query.genre);
  } else {
    filteredMovies = movies;
  }
  res.status(200).json(filteredMovies);
};

const getMovieById = async (req, res) => {
  const { movieId } = req.params;
  if (movieId) {
    const foundMovie = movies.find(
      (movie) => movie.id.toString() === movieId.toString()
    );
    if (foundMovie) {
      res.status(200).json({ movie: foundMovie });
    } else {
      res.status(404).json({ message: "Couldn't find movie." });
    }
  } else {
    res.status(400).json({ err: 'You must specify an id for the query.' });
  }
};

const createMovie = async (req, res) => {
  if (typeof req.body.year !== 'number') {
    res.status(400).json({ message: 'Year field should be a number.' });
  } else if (req.body.id && req.body.title && req.body.genre && req.body.year) {
    const { id, title, genre, year } = req.body;
    const movie = { id, title, genre, year };
    movies.push(movie);
    res.status(201).json(movie);
  } else {
    res.status(500).json({ message: 'Server error.' });
  }
};

const updateMovie = async (req, res) => {
  const { movieId } = req.params;
  const changes = req.body;
  if (movieId) {
    const foundMovie = movies.find(
      (movie) => movie.id.toString() === movieId.toString()
    );
    if (foundMovie) {
      const updatedMovies = movies.map((movie) => {
        if (movie.id.toString() === movieId.toString()) {
          return { ...movie, ...changes };
        }
        return movie;
      });
      movies = updatedMovies;
      res.status(202).json({ message: 'Changes accepted.' });
    } else {
      res.status(404).json({ err: 'Movie not found.' });
    }
  } else {
    res.status(400).json({ err: 'You must specify an id for the query.' });
  }
};

const deleteMovie = async (req, res) => {
  const { movieId } = req.params;
  if (movieId) {
    const foundMovie = movies.find(
      (movie) => movie.id.toString() === movieId.toString()
    );
    if (foundMovie) {
      const updatedMovies = movies.filter(
        (movie) => movie.id.toString() !== movieId.toString()
      );
      movies = updatedMovies;
      res.status(202).json({ message: 'Deleted movie.', movie: foundMovie });
    } else {
      res.status(404).json({ message: "Couldn't find movie." });
    }
  } else {
    res.status(400).json({ err: 'You must specify an id for the query.' });
  }
};

export { getAllMovies, getMovieById, createMovie, updateMovie, deleteMovie };
