/**
 * @param {string} word1
 * @param {string} word2
 * @return {string}
 */
var mergeAlternately = function(word1, word2) {
    const mergeArr = [];
    const str = word1.length > word2.length ? word1 : word2;
    for (let i = 0; i < str.length; i++) {
        if(word1[i]) mergeArr.push(word1[i]);
        if(word2[i]) mergeArr.push(word2[i]);
    }
    return mergeArr.join('');
};