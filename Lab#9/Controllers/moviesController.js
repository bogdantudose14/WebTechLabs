import { Movie } from "../Models/movie.js";
import { Op } from "sequelize";

//Controller example with SQLite Database => Sequelize Querying

// get all movies
const getAllMoviesFromDB = async (req, res) => {
  try {
    //The findAll() method will return your table rows as an array of objects.
    //The Sequelize findAll() method is used to query data from your SQL table to your JavaScript application.
    const movies = await Movie.findAll();
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
};

// get all movies but only some columns
const getAllMoviesGenresFromDB = async (req, res) => {
  try {
    //The findAll() method will return your table rows as an array of objects.
    //The attributes key will limit the return value to specific columns of the records.
    const movies = await Movie.findAll({ attributes: ["genre"] });
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
};

// the ID is the primary key => findByPk() sequelize method
const getMovieFromDBById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.movieId); // find by primary key => findByPK()
    if (movie) {
      return res.status(200).json(movie);
    } else {
      // if no entity exists, null is returned;
      return res
        .status(404)
        .json({ error: `Movie with id ${req.params.movieId} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//INSERT INTO
const insertMovieIntoDB = async (req, res) => {
  try {
    //create is mapped by Sequelize to "INSERT INTO ..."
    const newMovie = await Movie.create(req.body);
    return res.status(200).json(newMovie);
  } catch (err) {
    return res.status(500).json(err);
  }
};

//UPDATE
const updateMovieById = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.movieId);
    if (movie) {
      const updatedMovie = await movie.update(req.body); // update using the update() method provided by Sequelize on the returned PK object
      // OBS: update on the found object and not on the "Movie" model
      return res.status(200).json(updatedMovie);
    } else {
      // if no entity exists, null is returned;
      return res
        .status(404)
        .json({ error: `Movie with id ${req.params.movieId} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//DELETE
const deleteMovie = async (req, res) => {
  try {
    const movie = await Movie.findByPk(req.params.movieId); // find by primary key => findByPK()
    if (movie) {
      // destroy() is mapped to "DELETE ... FROM ..."
      await movie.destroy();
      return res.status(200).json("Entity deleted successfully!");
      //OBS: destroy() the found movie and do not call destroy() on the "Movie" model
    } else {
      // if no entity exists, null is returned;
      return res
        .status(404)
        .json({ error: `Movie with id ${req.params.movieId} not found` });
    }
  } catch (err) {
    res.status(500).json(err);
  }
};

//FILTER

const filterMoviesFromDB = async (req, res) => {
  try {
    const minYear = req.query.minYear; //
    const movies = await Movie.findAll({
      //parametrize the findAll with a "where" object
      //use the ternary operator =>
      where: minYear ? { year: { [Op.gt]: minYear } } : undefined,

      // use Op for accessing sequelize Operators => Op.gt = greater-than
    });
    return res.status(200).json(movies);
  } catch (err) {
    res.status(500).json(err);
  }
};

export {
  getAllMoviesFromDB,
  getAllMoviesGenresFromDB,
  getMovieFromDBById,
  filterMoviesFromDB,
  insertMovieIntoDB,
  updateMovieById,
  deleteMovie,
};
