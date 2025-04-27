/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charList = [];
    let length = 0;
    let left = 0;
    for (i = 0; i < s.length; i++) {
        while (charList.includes(s[i])) {
            charList.shift();
            left += 1;
        }
        charList.push(s[i]);
        length = Math.max(length, i - left + 1);
    }
    return length;
};