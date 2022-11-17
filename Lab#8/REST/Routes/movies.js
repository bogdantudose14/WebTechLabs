import express from 'express';
import * as moviesController from '../Controllers/movies.js';

// import the methods exported from movies.js into an object with the alias moviesController

const router = express.Router();

// middleware check if movieId is a number
const checkMovieId = (req, res, next) => {
  if (req.params.movieId && isNaN(req.params.movieId)) {
    res.status(400).json({ message: 'Movie id should be a number' });
  } else {
    //the routing methods can have more than one callback function as arguments.
    //With multiple callback functions, it is important to provide next as an argument to the callback function
    //and then call next() within the body of the function to hand off control to the next callback.
    next();
  }
};

router.get('/', moviesController.getAllMovies);
router.get('/:movieId', checkMovieId, moviesController.getMovieById);
router.post('/', moviesController.createMovie);
router.put('/:movieId', moviesController.updateMovie);
router.delete('/:movieId', moviesController.deleteMovie);

export { router as moviesRouter };
