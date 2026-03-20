/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    const res = new Array(nums.length).fill(1);
    let prefix = 1;
    let suffix = 1;
    for(let i = 0; i < nums.length; i++) {
        res[i] = prefix;
        prefix *= nums[i];
    }
    for(let j = nums.length - 1; j >= 0; j--) {
        res[j] *= suffix;
        suffix *= nums[j];
    }
    return res;
};