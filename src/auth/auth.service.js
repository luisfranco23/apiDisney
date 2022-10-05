const jwt = require('jsonwebtoken')
const { login } = require('./auth.controller')

const loginUser = (req, res) => {
    const data = req.body

    if (data.email && data.email) {
        login(data.email, data.password)
        .then((response) => {
            if (response) {
                const token = jwt.sign({
                    id: response.id,
                    emal: response.email,
                    role: response.role_id
                }, "clave")
                return res.status(200).json({status: "succes", token})
            }else {
                return res.status(400).json({message: "invalid credentials"})
            }
        })
        .catch(() => {
            return res.status(400).json({message: "invalid credentials"})
        })
    }
}

module.exports = {loginUser}