import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

const Course = sequelize.define("course", {
  id: {
    type: DataTypes.UUID,
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      len: [3, 200],
    },
  },
});

export { Course };
