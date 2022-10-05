const { DataTypes } = require("sequelize");
const { db } = require("../../utils/database");

const Gender = db.define('gender',{
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID
    },
    nameGender: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "name_gender"
    },
    urlImage: {
        type: DataTypes.STRING,
        validate: {
            isUrl: true
        },
        field: "url_image"
    }
})

module.exports = Gender