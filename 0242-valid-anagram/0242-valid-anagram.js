/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function (s, t) {
    if (s.length !== t.length) return false;
    const sMap = new Map();
    const tMap = new Map();
    for (let i = 0; i < s.length; i++) {
        let charCount = sMap.get(s.charAt(i));
        if (charCount) {
            sMap.set(s.charAt(i), charCount + 1);
        } else {
            sMap.set(s.charAt(i), 1);
        }
    }
    for (let j = 0; j < t.length; j++) {
        let charCount = tMap.get(t.charAt(j));
        if (charCount) {
            tMap.set(t.charAt(j), charCount + 1);
        } else {
            tMap.set(t.charAt(j), 1);
        }
    }
    for (let k = 0; k < s.length; k++) {
        if (sMap.get(s.charAt(k)) !== tMap.get(s.charAt(k))) return false;
    }
    return true;
};