const name = require('./name.js')
const email = require("./email.js");
const password = require("./password.js");

module.exports = async (inputs, required = true) => {

    let errors;

    const nameErrors = name(inputs.name, required);
    if(nameErrors) {
        errors = { ...errors, name: nameErrors }
    }

    const emailErrors = await email(inputs.email, required)
    if(emailErrors) {
        errors = { ...errors, email: emailErrors }
    }

    const passwordErrors = await password(inputs.password, required)
    if(passwordErrors) {
        errors = { ...errors, password: passwordErrors }
    }

    return errors

}