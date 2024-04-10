
const bigCharacterRegex = /[A-Z]/;
const smallCharacterRegex = /[a-z]/;
const specialCharacterRegex = /[\W]/;
const numberCharacterRegex = /\d/;

module.exports = async (input, required = true) => {

    const errors = [];

    if(!input){
        return required && ["Required to enter password"]
    }

    const is8Character = input.length > 7
    if(!is8Character) {
        errors.push("The name must be at least eight character long")
    }

    const containBigCharacter = bigCharacterRegex.test(input)
    if(!containBigCharacter){
        errors.push("The password must contain at least a capital letter")
    }

    const containSmallCharacter = smallCharacterRegex.test(input)
    if(!containSmallCharacter){
        errors.push("The password must contain at least a small letter")
    }

    const containSpecialCharacter = specialCharacterRegex.test(input);
    if(!containSpecialCharacter){
        errors.push("The password must contain at least a special character")
    }

    const containNumberCharacter = numberCharacterRegex.test(input);
    if(!containNumberCharacter) {
        errors.push("The password must contain at least a number")
    }

    if(errors.length > 0) {
        return errors
    }


}