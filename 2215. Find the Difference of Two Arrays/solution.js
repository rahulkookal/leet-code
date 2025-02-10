/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[][]}
 */
var findDifference = function(nums1, nums2) { 
    const a = new Set(nums1);
    const b = new Set(nums2);
    return [a.difference(b).values().toArray(), b.difference(a).values().toArray() ]
};