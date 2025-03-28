/**
 * @param {number[]} nums
 * @return {number[]}
 */
var productExceptSelf = function(nums) {
    let left = [1];
    let leftProduct = 1;
    for(let i = 1; i<nums.length; i++) {
        leftProduct = nums[i-1]*leftProduct;
        left[i] = leftProduct; 
    }

    let right = [1];
    let rightProduct = 1
    for(let i = nums.length - 2; i>=0; i--) {
        rightProduct = nums[i+1]*rightProduct;
        right.unshift(rightProduct);
    }

    let result = []
    for (let i = 0; i < nums.length; i++) {
        result[i] = left[i]*right[i];
    }

    return result;
};