/**
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
    let max = 0;
    let curr = 0;
    for (let i = 0; i < nums.length; i++) {
        if (nums[i]) {
            curr++;
        } else {
            curr = 0;
        }
        max = Math.max(max, curr);
    }
    return max;
};