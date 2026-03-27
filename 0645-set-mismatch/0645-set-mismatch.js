/**
 * @param {number[]} nums
 * @return {number[]}
 */
var findErrorNums = function(nums) {
    const res = [];
    const obj = {};
    for (let i = 0; i < nums.length; i++) {
        if (obj[nums[i]]) {
            obj[nums[i]] += 1;
            res.push(nums[i]);
        } else {
            obj[nums[i]] = 1;
        }
    }
    for (let i = 0; i < nums.length; i++) {
        if (!obj[i + 1]) {
            res.push(i + 1);
        }
    }
    return res;
};