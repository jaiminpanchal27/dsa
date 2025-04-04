/**
 * Explaination: https://www.youtube.com/watch?v=iCrQG_kbuP0
 * Leetcode 268 Missing Number
 * 
 * This problem can also be done using XOR operation.
 * 
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let len = nums.length;
    let sum = len*(len+1)/2;
    for (let i =0; i<len; i++) {
        sum = sum - nums[i];
    }
    return sum;
};