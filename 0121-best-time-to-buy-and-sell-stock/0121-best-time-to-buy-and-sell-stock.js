/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let maxProfit = 0;
    let buy = 0;
    let sell = 1;

    while (sell < prices.length) {
        let buyPrice = prices[buy];
        let sellPrice = prices[sell];
        const profit = sellPrice - buyPrice;
        if (profit <= 0) buy = sell;
        if (profit > maxProfit) maxProfit = profit;
        sell += 1;
    }

    return maxProfit;
};