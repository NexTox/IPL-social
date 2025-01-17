function passwordChecker(password) {
    if(password.length < 8) {
        return false;
    }
    return true;
}

module.exports = {passwordChecker};