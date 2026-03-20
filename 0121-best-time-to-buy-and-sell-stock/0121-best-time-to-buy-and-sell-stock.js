/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = 0;
    let sell = 1;
    while (sell < prices.length) {
        if (prices[buy] >= prices[sell]) {
            buy++;
            sell = buy + 1;
        } else {
            maxProfit = Math.max(maxProfit, prices[sell] - prices[buy]);
            sell++;
        }
    }
    return maxProfit;
};