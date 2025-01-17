function passwordChecker(password) {
    return charactersChecker(password);
}

function charactersChecker(password) {
    if(password.length < 8) {
        return false;
    }
    return true;
}

module.exports = {passwordChecker, charactersChecker};