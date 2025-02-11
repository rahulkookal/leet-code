/**
 * @param {number[]} nums
 * @param {number} k
 * @return {number}
 */
var maxOperations = function(nums, k) {
    if(nums.length ==1) return 0
    nums.sort((a, b) => a - b);
    var left = 0;
    var right = nums.length-1
    var no = 0
    while(left<right){
        if(nums[left]+ nums[right] == k){
            no++
            left++
            right--
        } else if(nums[left]+ nums[right] < k){
            left++
        } else {
            right--
        }
    }
    return no
};