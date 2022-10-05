const { DataTypes } = require('sequelize')

const { db } = require('../../utils/database')

const Role = db.define('role',{
    id: {
        primaryKey: true,
        allowNull: false,
        type: DataTypes.UUID
    },
    nameRole: {
        allowNull: false,
        type: DataTypes.STRING,
        field: "name_role"
    }
})

module.exports = Role