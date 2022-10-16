const { DataTypes } = require("sequelize");
const { db } = require("../../utils/database");

const Movies = db.define("movies", {
  id: {
    primaryKey: true,
    allowNull: false,
    type: DataTypes.UUID,
  },
  title: {
    allowNull: false,
    type: DataTypes.STRING,
  },
  urlImage: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isUrl: true,
    },
    field: "url_image",
  },
  creationDate: {
    allowNull: false,
    type: DataTypes.DATE,
  },
  qualification: {
    type: DataTypes.INTEGER,
    defaultValue: 0,
  },
  genderId: {
    type: DataTypes.UUID,
    field: "gender_id",
  },
});

module.exports = Movies;
