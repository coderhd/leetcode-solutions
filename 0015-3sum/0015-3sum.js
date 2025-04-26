/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    const sortedNums = nums.sort((a,b) => a - b);
    const results = [];
    for (let i = 0; i < sortedNums.length; i++) {
        if (i > 0 && sortedNums[i] === sortedNums[i - 1]) continue;
        let left = i + 1;
        let right = sortedNums.length - 1;
        while (left < right) {
            const targetSum = sortedNums[i] + sortedNums[left] + sortedNums[right];
            if (targetSum === 0) {
                results.push([sortedNums[i], sortedNums[left], sortedNums[right]]);
                // sortedArray = [-4, -1, -1, 0, 1, 2]
                // found: [-1, 0, 1]
                left++;
                // This will again find -1 but we already have solution    containing -1, so again we need to increment until different value is found
                while (sortedNums[left] === sortedNums[left - 1] && left < right) {
                    left++;
                }
            }
            else if (targetSum > 0) right--;
            else left++;
        }
    }
    return results;
};