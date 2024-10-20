/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let curr = 0;
    if (nums.length == 0) {
        return curr
    }
    let left = -1, right = 0;
    for (let i = -1; i < nums.length;) {
        while(nums[i+right+1] != 0 && (i+right+1) <nums.length){
            right++
        }
        
        if(curr < left + right){
            curr = left + right;
        }
        i = i+right+1;
        left = right;
        right = 0;
    }
    return curr
};