/**
 * @param {number[]} nums
 * @return {number}
 */
var findPeakElement = function(nums) {
    let left = 0;
    for(let right = 1; right < nums.length; right++) {
        left =0;
        while(nums[right + left - 1] < nums[right + left] && right+left <nums.length){
            left++;
        }
        return right + left -1;
    }
    return 0;
};