const { getUsers, newRole, registerUser, getUserById } = require("../controller/controller.users")


const getAllUsers = (req, res) => {
    getUsers()
    .then((response) => {
        res.status(200).json({items: response.length, users: response})
    })
    .catch((err) => {
        res.status(400).json(err)
    })
}

const getUserId = (req, res) => {
    const id = req.params.id
    getUserById(id)
    .then((response) => {
        res.status(200).json(response)
    })
    .catch((err) => {
        res.status(400).json({mesagge: `The user by ${id} not found`})
    })
}

const register = (req, res) => {
    let data = req.body
    if (data.nameUser || data.email || data.password) {
        registerUser(data)
        .then(response => {
            res.status(201).json(response)
        })
        .catch(err => {
            res.status(400).json(err)
        })
    }else {
        res.status(400).json({status: "failed", message: "This information is necessary: nameUser, email, password"})
    }
}


const role = (req, res) => {
    let data = req.body
    newRole(data)
    .then(response => {
        res.status(201).json({items: response.length, response})
    })
    .catch(err => {
        res.status(400).json(err)
    })
}

module.exports = {
    getAllUsers,
    role,
    getUserId,
    register
}