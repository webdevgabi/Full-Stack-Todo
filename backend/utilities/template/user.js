const bcrypt = require('bcrypt');

module.exports = async (data) => {
    const { name, email, password } = data

    return {
        name: name,
        email: email,
        password: await bcrypt.hash(password, 10),
        token: ''
    }
}