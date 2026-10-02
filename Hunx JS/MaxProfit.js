const maxProfit = (stockPricesPerDay) => {
  console.log(stockPricesPerDay)
  let maxProfit = 0
  let buy = stockPricesPerDay[0]
  for (let i = 1; i < stockPricesPerDay.length; i++) {
    if (stockPricesPerDay[i] < buy) {
      buy = stockPricesPerDay[i]
    } else if (stockPricesPerDay[i] > buy) {
      const newMaxProfit = stockPricesPerDay[i] - buy
      if (newMaxProfit > maxProfit) {
        maxProfit = newMaxProfit
      }
    }

  }
  return maxProfit
}

console.log(maxProfit([7, 1, 5, 3, 6, 4]))

const maxProfitHunx = (prices) => {
  let maxProfit = 0
  let minPrice = prices[0]

  for (i = 1; i < prices.length; i++) {
    let current = prices[i]

    minPrice = Math.min(minPrice, current)
    const potentialProfit = current - minPrice
    maxProfit = Math.max(maxProfit, potentialProfit)
  }
  return maxProfit
}

console.log(maxProfitHunx([7, 1, 5, 3, 6, 4]))



