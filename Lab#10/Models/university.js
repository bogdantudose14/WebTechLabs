import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

const University = sequelize.define("university", {
  id: {
    type: DataTypes.UUID, // preffered type for IDs
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

export { University };
