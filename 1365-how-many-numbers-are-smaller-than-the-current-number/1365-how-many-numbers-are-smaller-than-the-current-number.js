/**
 * @param {number[]} nums
 * @return {number[]}
 */
var smallerNumbersThanCurrent = function(nums) {
    const sortedNums = [...nums].sort((a,b) => a - b);
    const obj = {};
    for (let i = 0; i < sortedNums.length; i++) {
        if (obj[sortedNums[i]] === undefined) {
            obj[sortedNums[i]] = i;
        }
    }
    return nums.map((num) => obj[num]);
};