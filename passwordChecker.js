function passwordChecker(password) {
    return charactersChecker(password);
}

function charactersChecker(password) {
    if(password.length < 8) {
        return false;
    }
    return true;
}

function specialCharactersChecker(password) {
    const specialCharacters = ['!','@','#','$','%','^','&','*','(',')','_','-','+','=','{','}','[',']','|','\\',':',';','"',"'",'<','>','?',',','.','/','~','`'];
    for(let i = 0; i < password.length; i++) {
        if(specialCharacters.includes(password[i])) {
            return true;
        }
    }
    return false;
}

module.exports = {passwordChecker, charactersChecker, specialCharactersChecker};