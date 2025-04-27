/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    const charList = [];
    let length = 0;
    let left = 0;
    for (let right = 0; right < s.length; right++) {
        while (charList.includes(s[right])) {
            charList.shift();
            left += 1;
        }
        charList.push(s[right]);
        length = Math.max(length, right - left + 1);
    }
    return length;
};