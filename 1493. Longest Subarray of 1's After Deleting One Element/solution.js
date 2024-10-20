/**
 * @param {number[]} nums
 * @return {number}
 */
var longestSubarray = function (nums) {
    let result = 0;
    
    if (nums.length === 0) {
        return result;
    }

    let left = -1, right = 0;
    
    for (let i = -1; i < nums.length;) {
        // Move `right` forward while the element is not zero and within bounds
        while (nums[i + right + 1] !== 0 && (i + right + 1) < nums.length) {
            right++;
        }
        
        // Update the longest subarray length
        if (result < left + right) {
            result = left + right;
        }

        // Move to the next segment
        i = i + right + 1;
        left = right;
        right = 0;
    }
    
    return result;
};
