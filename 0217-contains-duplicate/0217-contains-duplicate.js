/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    const numMap = new Map();
    for(let i = 0; i < nums.length; i++) {
        if (Boolean(numMap.get(nums[i]))) {
            return true;
        }
        else {
            numMap.set(nums[i], 1);
        }
    }
    return false;;
};