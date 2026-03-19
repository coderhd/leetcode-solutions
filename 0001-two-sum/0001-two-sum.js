/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    const iObject = {}
    for(let i = 0; i<nums.length ; i++){
        iObject[nums[i]] = i;
    }

    console.log(iObject);

    for(let j = 0; j<nums.length; j++){
        const s = target - nums[j];
        if(iObject[s] && iObject[s] !== j){
            return [iObject[s], j]
        }
    }
};