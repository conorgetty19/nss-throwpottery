//function. has no parameters. creates empty object
const buyClay = () => {
    const newCLayObj = {}

    return newCLayObj
}

//fun takes obj as argument. add "shape" prop w/value "Bowl". returns obj
const makePottery = (object) => {
    object.shape = "Bowl"

    return object
}

//fun takes obj as argument. adds "readyForGlazing" prop w/value true. returns obj
const bisqueFire = (object) => {
    object.readyForGlazing = true

    return object
}

//fun takes obj as argument. If statement checks if pottery obj is bisque fired.
//If not, console.log() a message to the user.
//If yes, add glazing prop w/ value "Midnight Blue". returns obj
const glazePottery = (object) => {
    if (object.readyForGlazing !== true) {
        console.log("Make sure you bisque fire the pottery before you glaze it.")
    }
    else {
        object.glazing = "Midnight Blue"
    }

    return object
}

//fun takes obj and temperature as arguments (2 para). If statement.
//If temp > 1200, add "cracked" prop w/value true
//if not, add "cracked" prop w/value false. returns obj.
const finalFiring = (obj, temp) => {
    if (temp>1200) {
        obj.cracked = true
    }
    else {
        obj.cracked = false
    }

    return obj
}

//invoke functions
const glazedPottery = finalFiring(glazePottery(bisqueFire(makePottery(buyClay()))))

//high temp test. print whole object
const firedPottery1400 = finalFiring(glazedPottery, 1400)
console.log(firedPottery1400)

//low temp test. print whole object
const firedPottery1200 = finalFiring(glazedPottery, 1200)
console.log(firedPottery1200)