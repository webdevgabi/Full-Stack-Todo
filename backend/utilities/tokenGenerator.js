
// UTILITIES - DB
const find = require("../utilities/db/find")

let myString = "qwertzuiopasdfghjklyxcvbnmQWERTZUIOPASDFGHJKLYXCVBNM0123456789";

const tokenGenerator = async () => {
    let isUnique = true;
    let hash = '';

    while(isUnique) {
        for (let i = 0; i < 50; i++) hash += myString[Math.floor(Math.random() * myString.length)];

        const isUniqueToken = await find({ collection: 'users', field: 'token', data: hash });

        if(!isUniqueToken) {
            isUnique = false;
            return hash;
        };

        hash = '';
    }

};

module.exports = tokenGenerator;