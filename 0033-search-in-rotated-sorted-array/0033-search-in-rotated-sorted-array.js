/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    let left = 0;
    let right = nums.length - 1;
    while (left <= right) {
        const middle = Math.floor((left + right) / 2);
        if (target === nums[middle]) return middle;
        // Left Sorted Portion
        if (nums[left] <= nums[middle]) {
            if (target > nums[middle] || target < nums[left]) {
                left = middle + 1;
            } else {
                right = middle - 1;
            }
        }
        // Right Sorted Portion
        else {
            if (target < nums[middle] || target > nums[right]) {
                right = middle - 1;
            } else {
                left = left + 1;
            }
        }
    }
    return -1;
};