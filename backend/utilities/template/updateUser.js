const bcrypt = require("bcrypt")

module.exports = async (data) => {
    const {name, email, password, token, ...details} = data;
    const newData = {};

    if(name){
        newData.name = name
    }

    if(email){
        newData.email = email
    }

    if(password){
        newData.password = await bcrypt.hash(password, 10)
    }

    if(token) {
        delete data.token
    }

    if(details) {
        newData.details = details
    }

    return newData
}