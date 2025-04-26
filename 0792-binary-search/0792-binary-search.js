/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0; // Left edge
    let right = nums.length - 1;  // Right Edge

    while (left <= right) {
        // Find Middle
        const middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        if (target < nums[middle]) {
            right = middle - 1;
        } else if (target > nums[middle]) {
            left = middle + 1;
        }
    }
    return -1;
};