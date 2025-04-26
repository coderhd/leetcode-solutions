/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    const alNumStr = s.toLowerCase().trim().replace(/[^a-zA-Z0-9]/g, '');
    let left = 0;
    let right = alNumStr.length - 1;

    while (left <= right) {
        if (alNumStr[left] === alNumStr[right]) {
            left++;
            right--;
        } else {
            return false;
        }
    }
    return true;
};