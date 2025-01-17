const {passwordChecker,charactersChecker,specialCharactersChecker,digitChecker,IplNotPresentChecker} = require('../passwordChecker');

describe('Password validation', () => {
    it('should return false if password is less than 8 characters', () => {
        const password = 'short';

        const response = charactersChecker(password);

        expect(response).toBe(false);
    });
    it('should return true if password is  8 characters', () => {
        const password = 'shortiyto';

        const response = charactersChecker(password);

        expect(response).toBe(true);
    });
    it('should return true if password is more than 8 characters', () => {
        const password = 'shortiytoto';

        const response = charactersChecker(password);

        expect(response).toBe(true);
    });

    it('should return false if password does not contain special characters', () => {
        const password = 'shortiyto';

        const response = specialCharactersChecker(password);

        expect(response).toBe(false);
    });

    it('should return true if password contains a special characters', () => {
        const password = 'shortiyto!';

        const response = specialCharactersChecker(password);

        expect(response).toBe(true);
    });

    it('should return false if password does not contain a digit', () => {
        const password = 'short';

        const response = digitChecker(password);

        expect(response).toBe(false);
    });

    it('should return true if password contains a digit', () => {
        const password = 'short1';

        const response = digitChecker(password);

        expect(response).toBe(true);
    });

    it('should return false if password contains IPL', () => {
        const password = 'shortitotoIPL';

        const response = IplNotPresentChecker(password);

        expect(response).toBe(false);
    });
});