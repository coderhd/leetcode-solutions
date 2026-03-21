/**
 * @param {string[]} strs
 * @return {string[][]}
 */
var groupAnagrams = function(strs) {
    const res = {};
    for (let s of strs) {
        const count = Array.from({length: 26}, () => [0]);
        for (let i = 0; i < s.length; i++) {
            count[s.charCodeAt(i) - 'a'.charCodeAt(0)][0] += 1;
        }
        res[count.toString()] = res[count.toString()] ? [ ...res[count.toString()], s]: [s];
    }
    return Object.values(res);
};