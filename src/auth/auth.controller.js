const { comparePassword } = require("../../utils/passCrypt")
const { getUserByEmail } = require("../controller/controller.users")



const login = async (email, password) => {
    const user = await getUserByEmail(email)
    const verified = comparePassword(password, user.password)
    if (verified) {
        return user
    }
    return false
}

module.exports = {login}