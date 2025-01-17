const {passwordChecker} = require('../passwordChecker');

describe('Password validation', () => {
    it('should return false if password is less than 8 characters', () => {
        const password = 'short';

        const response = passwordChecker(password);

        expect(response).toBe(false);
    });
});