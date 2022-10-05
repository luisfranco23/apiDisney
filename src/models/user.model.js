const { DataTypes } = require('sequelize')

const { db } = require('../../utils/database')
const { hashPassword } = require('../../utils/passCrypt')

const Users = db.define('users', {
    id: {
        primaryKey: true,
        type: DataTypes.UUID,
        allowNull: false
    },
    nameUser: {
        allowNull: false,
        type: DataTypes.STRING,
        field: 'name_user'
    },
    email: {
        type: DataTypes.STRING,
        allowNull: true,
        unique: true,
        validate: {
            isEmail: true
        }
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false
    },
    roleId: {
        allowNull: false,
        type: DataTypes.UUID,
        field: 'role_id'
    },
    status : {
        allowNull: false,
        type: DataTypes.BOOLEAN,
        defaultValue: true
    }
})

module.exports = Users