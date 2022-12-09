import { sequelize } from "../sequelize.js";
import { DataTypes } from "sequelize";

const Student = sequelize.define("student", {
  id: {
    type: DataTypes.UUID, // preffered type for IDs
    defaultValue: DataTypes.UUIDV4,
    primaryKey: true,
  },
  firstName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  lastName: {
    type: DataTypes.STRING,
    allowNull: false,
  },
});

export { Student };
