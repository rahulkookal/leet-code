/**
 * @param {number[]} cost
 * @return {number}
 */
var minCostClimbingStairs = function(cost) {
    return costCalc(cost)
};
var costCalc = function(cost) {
    var dp = [];
    dp[0] = cost[0];
    dp[1] = cost[1];
    for(let i=2; i<= cost.length -1; i++){
        dp[i] = cost[i] + Math.min(dp[i-1], dp[i-2])
    }
    return Math.min(dp[cost.length-1], dp[cost.length-2])
}