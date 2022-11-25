import { DataTypes } from "sequelize";
import { sequelize } from "../sequelize.js";

const Movie = sequelize.define(
  "Movie", // the name of the model
  // the list of the attributes and their properties

  // NOTE: Sequelize will throw a validation error if an object does not meet these requirements when being
  //        inserted into the database.
  {
    id: {
      // pass a configuration object
      type: DataTypes.INTEGER,
      primaryKey: true, // specify that this is the primary key of the table
      autoIncrement: true,
    },
    title: DataTypes.STRING, // we don't have to pass a configuration object if we don't want to
    genre: {
      type: DataTypes.STRING,
      allowNull: false, // whether we allow for null values in this column or not
    },
    year: {
      type: DataTypes.INTEGER,
      validate: {
        //pre-attribute validations
        min: 1800,
        max: 2001,
      },
    },
  },
  {
    tableName: "Movies", //specify the name of the table
  }
);

export { Movie };
