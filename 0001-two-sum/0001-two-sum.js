/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const numObj = {};
    nums.forEach((num, idx) => {
        numObj[num] = idx;
    });
    for (let i = 0; i < nums.length; i++) {
        if (numObj[target - nums[i]] && numObj[target - nums[i]] !== i) return [i, numObj[target - nums[i]]];
    }
};