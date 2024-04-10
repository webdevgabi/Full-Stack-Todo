const find = require("../db/find");

const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

module.exports = async (input, required = true) => {

    if(!input) {
        return required && ["Required to enter email address"]
    }

    const isEmailFormat = emailRegex.test(input);
    if(!isEmailFormat) {
        return ["The email format is not correct"];
    }

    const inUse = await find({ collection: 'users', condition: { email: input } })
    if(inUse) {
        return ["The email is already in use"];
    }

}