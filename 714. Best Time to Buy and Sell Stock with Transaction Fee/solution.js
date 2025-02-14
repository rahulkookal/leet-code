/**
 * @param {number[]} prices
 * @param {number} fee
 * @return {number}
 */

 
var maxProfit = function(prices, fee) {

    var hold = -prices[0];
    var profit = 0;

    for(let i = 1; i< prices.length; i++){
        profit = Math.max(profit, hold + prices[i] -fee)
        hold = Math.max(hold, profit-prices[i])
    }
    return profit;
};