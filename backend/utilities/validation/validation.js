const name = require('./name.js')
const email = require("./email.js");
const password = require("./password.js");

module.exports = async (inputs) => {

    let errors;

    const nameErrors = name(inputs.name);
    if(nameErrors) {
        errors = { ...errors, name: nameErrors }
    }

    const emailErrors = await email(inputs.email)
    if(emailErrors) {
        errors = { ...errors, email: emailErrors }
    }

    const passwordErrors = await password(inputs.password)
    if(passwordErrors) {
        errors = { ...errors, password: passwordErrors }
    }

    return errors

}