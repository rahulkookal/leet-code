/**
 * @param {number[]} candies
 * @param {number} extraCandies
 * @return {boolean[]}
 */
var kidsWithCandies = function(candies, extraCandies) {
    let gt = Math.max(...candies)
    return candies.map((can) => (gt <= can+extraCandies)? true: false)
};