module.exports = (input, required = true) => {

    if(!input){
        return required && ["Required to enter a name"]
    }

    const is4Character = input.length > 3
    if(!is4Character) {
        return ["The name must be at least four character long"]
    }

}