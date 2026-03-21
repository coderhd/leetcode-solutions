/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    if (s.length <= 1) return s.length;
    let left = 0;
    let right = 1;
    let maxLen = 1;
    let subStr = s.charAt(left);
    while (right < s.length) {
        if (subStr.includes(s.charAt(right))) {
            left++;
            right = left + 1;
            subStr = s.charAt(left);
        } else {
            right++;
            subStr = s.slice(left, right);
            maxLen = Math.max(maxLen, right - left);
        }
    }
    return maxLen;
};