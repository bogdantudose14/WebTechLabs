// const express = require("express"); // => no need for adding "type":"module" to package.json
import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./sequelize.js";
import { mainRouter } from "./Routes/mainRouter.js";

// Import created models
import { University } from "./Models/university.js";
import { Student } from "./Models/student.js";
import { Course } from "./Models/course.js";

// Express middleware

const app = express();

// Define entities relationship
University.hasMany(Student);
University.hasMany(Course);
Student.belongsToMany(Course, { through: "enrollments" });
Course.belongsToMany(Student, { through: "enrollments" });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

// Create a middleware to handle errors (it will be accessed from the routers through next())
app.use((error, request, response, next) => {
  console.error(`[ERROR]: ${error}`);
  response.status(500).json(error);
});

app.use("/api", mainRouter);

app.listen(5001, async () => {
  console.log("Express web server running on port 5001");
  try {
    await sequelize.authenticate(); // test if the connection is ok
    console.log("Connection has been established!");
  } catch (err) {
    console.err("Unable to connect to the database!", err);
  }
});
