/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    // Initialise results with value 1
    const result = Array(nums.length).fill(1);
    // initialise prefix with 1
    let prefix = 1;
    // inerate once forward
    for (let i = 0; i < nums.length; i++) {
        // multiply result with prefix
        result[i] = prefix * result[i];
        // multiply prefix with current number
        prefix *= nums[i];
    }
    // initialise postfix with 1
    let postfix = 1;
    // iterate over numbers in reverse
    for (j = nums.length - 1; j >= 0; j--) {
        // multiply result with postfix
        result[j] = postfix * result[j];
        // multiply postfix with current number
        postfix *= nums[j];
    }
    return result;
};