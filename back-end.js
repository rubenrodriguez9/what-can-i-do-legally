function whatCanIDoLegally(age){
    // if it's under 18, they can't drive or drink
    if(age < 18){
        return "you can't drink or drive"
    }
    // if it's between 18 and 20 inclusive they can drive
    if(age >=18 && age <= 20){
        return "you can drive but don't drink"
    }
    // if it's at least 21, they can do both
    if(age > 20){
        return "you can do both"
    }
}

module.exports = whatCanIDoLegally;