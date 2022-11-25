import express from "express";
import cors from "cors";
import bodyParser from "body-parser";
import { sequelize } from "./sequelize.js";
import { moviesRouter } from "./Routes/moviesRouter.js";

const app = express();
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(cors());

app.use("/api", moviesRouter);

app.listen(5001, async () => {
  console.log("Express web server running on port 5001");
  try {
    await sequelize.authenticate();
    console.log("Connection has been established!");
  } catch (err) {
    console.err("Unable to connect to the database!", err);
  }
});
