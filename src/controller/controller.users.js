const Users = require("../models/user.model")
const uuid = require('uuid')
const Role = require("../models/role.model")
const { hashPassword } = require("../../utils/passCrypt")

const getUsers = async () => {
    const response = await Users.findAll({
        attributes: {
            exclude: ["password"]
        }
    })
    return response
}

const registerUser = async (data) => {
    const newUser = await Users.create({
        id: uuid.v4(),
        nameUser: data.nameUser,
        email: data.email,
        password : hashPassword(data.password),
        roleId: "e1f6bbfa-19a0-4f2a-8a73-74318cb58cf4",
    })
    return newUser
}

const getUserById = async (id) => {
    const data = await Users.findOne({
        where:{
            id
        },
        attributes: {
            exclude: ["password"]
        }
    })
    return data
}

const getUserByEmail = async (email) => {
    const data = await Users.findOne({
        where: {
            email
        }
    })
    return data
}

const updateUserById = async (id, data) => {
    const updateUser = await Users.update({
    },{
        where: {
            id: id
        }
    })
}

const newRole = async (data) => {
    const role = await Role.create({
        id: uuid.v4(),
        nameRole: data.nameRole
    })
    return role 
}


module.exports = {
    getUsers,
    newRole,
    registerUser,
    getUserById,
    getUserByEmail
}