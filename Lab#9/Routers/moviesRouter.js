import express from "express";
import * as moviesController from "../Controllers/moviesController.js";

const router = express.Router();

router.get("/movies", moviesController.getAllMoviesFromDB);
router.get("/moviesGenres", moviesController.getAllMoviesGenresFromDB);
router.get("/filterMovies", moviesController.filterMoviesFromDB);
router.post("/newMovie", moviesController.insertMovieIntoDB);
router.get("/movies/:movieId", moviesController.getMovieFromDBById);
router.put("/movies/:movieId", moviesController.updateMovieById); // update is associated to the HTTP PUT method
router.delete("/movies/:movieId", moviesController.deleteMovie); // delete is associated to the HTTP DELETE method

export { router as moviesRouter };
