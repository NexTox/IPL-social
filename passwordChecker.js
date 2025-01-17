function passwordChecker(password) {
    if(specialCharactersChecker(password) && charactersChecker(password)
    && digitChecker(password) && IplNotPresentChecker(password)) {
        return true;
    }
    return false;
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

function digitChecker(password){
    for(let i = 0; i < password.length; i++) {
        if(!isNaN(password[i]) && password[i] !== ' ') {
            return true;
        }
    }
    return false;
}

function IplNotPresentChecker(password){
    const IPL = ['IPL', 'ipl'];
    if (password.includes(IPL[0]) || password.includes(IPL[1])) {
        return false;
    }
    return true;
}

module.exports = {passwordChecker, charactersChecker, specialCharactersChecker,digitChecker,IplNotPresentChecker};