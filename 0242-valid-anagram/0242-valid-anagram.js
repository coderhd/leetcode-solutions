/**
 * @param {string} s
 * @param {string} t
 * @return {boolean}
 */
var isAnagram = function(s, t) {
    if (s.length !== t.length) return false;
    sMap = new Map();
    tMap = new Map();
    for (let c of s) {
        if (sMap.has(c)) sMap.set(c, sMap.get(c) + 1);
        else sMap.set(c, 1);
    }
    for (let c of t) {
        if (tMap.has(c)) tMap.set(c, tMap.get(c) + 1);
        else tMap.set(c, 1);
    }
    for (let c of s) {
        if (sMap.get(c) !== tMap.get(c)) return false;
    }
    return true;
};