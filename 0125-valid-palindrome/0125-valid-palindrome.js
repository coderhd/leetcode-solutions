/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const pStr = s.replace(/[^a-zA-Z0-9]/g, '').toLowerCase();
    for (let i = 0; i < pStr.length; i++) {
        const currChar = pStr.charAt(i);
        const compChar = pStr.charAt(pStr.length - 1 - i);
        if (currChar !== compChar) return false;
    }
    return true;
};