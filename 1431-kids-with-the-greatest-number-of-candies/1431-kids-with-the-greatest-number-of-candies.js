/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    const res = [];
    let max = 1;
    for (let i = 0; i < candies.length; i++) {
        max = Math.max(max, candies[i]);
    }
    for (let j = 0; j < candies.length; j++) {
        res.push(candies[j] + extraCandies >= max);
    }
    return res;
};