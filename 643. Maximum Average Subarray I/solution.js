/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var findMaxAverage = function(nums, k) {
    let sum = nums.slice(0, k).reduce((a, r) => a+r), 
    result = sum/k;
    for(let i = 1; i <= nums.length -k;i++) {
        sum = sum - nums[i-1] + nums[i+k-1]
        if(result < sum/k){
            result = sum/k
        }
    }
    return result;
};