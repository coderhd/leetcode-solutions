/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function (nums, target) {
    // This will only work for sorted array
    // Time Complexity: n
    // let left = 0;
    // let right = nums.length - 1;
    // while (left < right) {
    //     const sum = nums[left] + nums[right];
    //     if (sum === target) return [left, right];
    //     else if (sum < target) left++;
    //     else right--;
    // }

    // return [-1, -1];

// This will work for any array
// Time Complexity n because 2n is n only in terms of Time Complexity
    const map = new Map();
    for (let i =0; i < nums.length; i++) {
        map.set(nums[i], i);
    }
    for (let i = 0; i < nums.length; i++) {
        const complement = target - nums[i];
        if (map.has(complement) && map.get(complement) !== i) {
            return [i, map.get(complement)];
        }
    }
    return [];
};