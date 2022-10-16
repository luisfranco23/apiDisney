const { DataTypes } = require("sequelize");
const { db } = require("../../utils/database");

const Characters = db.define('characters',{
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    nameCharacter : {
        type: DataTypes.STRING,
        allowNull: false,
        field: "name_character"
    },
    age: {
        allowNull: false,
        type: DataTypes.INTEGER,
        validate: {
            isFloat: false
        }
    },
    urlImage: {
        allowNull: false,
        type: DataTypes.STRING,
        // validate: {
        //     isUrl: true
        // },
        field: "url_image"
    },
    weigth: {
        type: DataTypes.STRING,
        allowNull: false
    },
    history: {
        allowNull: false,
        type: DataTypes.TEXT
    },
    movieId: {
        type: DataTypes.UUID,
        field: "movide_id"
    }
})

module.exports = Characters