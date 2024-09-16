/*
    THESE EXERCISES ARE QUITE HARD. JUST DO YOUR BEST, AND COME WITH QUESTIONS IF YOU GET STUCK :)

    Imagine we a working for a finance company. Below we have:
        - an array of stock tickers
        - an array of arrays containing the closing price for each stock in each of the last 5 days.
            For example, CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS[2] contains the prices for the last 5 days for STOCKS[2] (which is amzn)
*/

/* ======= Stock data - DO NOT MODIFY ===== */
const STOCKS = ["aapl", "msft", "amzn", "googl", "tsla"];

const CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS = [
  [179.19, 180.33, 176.28, 175.64, 172.99], // AAPL
  [340.69, 342.45, 334.69, 333.2, 327.29], // MSFT
  [3384.44, 3393.39, 3421.37, 3420.74, 3408.34], // AMZN
  [2951.88, 2958.13, 2938.33, 2928.3, 2869.45], // GOOGL
  [1101.3, 1093.94, 1067.0, 1008.87, 938.53], // TSLA
];

/*
    We want to understand what the average price over the last 5 days for each stock is.
    Implement the below function, which
        - Takes this CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
        - Returns an array containing the average price over the last 5 days for each stock. 
            For example, the first element of the resulting array should contain Apple’s (aapl) average stock price for the last 5 days.
            The second element should be Microsoft's (msft) average price, and so on.
    The average value should be rounded to 2 decimal places, and should be a number (not a string)

    Hint 1: To calculate the average of a set of values, you can add them together and divide by the number of values.
        So the average of 5, 10 and 20 is (5 + 10 + 20) / 3 = 11.67
    Hint 2: If the problem seems complex, try breaking it down into smaller problems.
        Solve the smaller problems, and then build those solutions back up to solve the larger problem.
        Functions can help with this!
*/
function getAveragePrices(closingPricesForAllStocks) {
  let averagePrice = [];
  for (let closingPricesForOneStock of closingPricesForAllStocks) {
    let total = 0;
    let average = 0;
    for (i = 0; i < closingPricesForOneStock.length; i++) {
      total += closingPricesForOneStock[i];
    }
    average = total / closingPricesForOneStock.length;
    averagePrice.push(Math.round(average * 100) / 100);
  }
  return averagePrice;
}

/*
    We also want to see what the change in price is from the first day to the last day for each stock.
    Implement the below function, which
        - Takes this CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
        - Returns an array containing the price change over the last 5 days for each stock.
            For example, the first element of the resulting array should contain Apple’s (aapl) price change for the last 5 days.
            In this example it would be:
                (Apple's price on the 5th day) - (Apple's price on the 1st day) = 172.99 - 179.19 = -6.2
    The price change value should be rounded to 2 decimal places, and should be a number (not a string)
*/
function getPriceChanges(closingPricesForAllStocks) {
  let priceChange = [];

  for (let closingPricesForOneStock of closingPricesForAllStocks) {
    let difference = 0;
    difference =
      closingPricesForOneStock.slice(-1) - closingPricesForOneStock[0];
    priceChange.push(Math.round(difference * 100) / 100);
  }
  return priceChange;
}

/*
    As part of a financial report, we want to see what the highest price was for each stock in the last 5 days.
    Implement the below function, which
        - Takes 2 parameters:
            - the CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS array as input (remember, it's an array of arrays)
            - the STOCKS array
        - Returns an array of strings describing what the highest price was for each stock.
            For example, the first element of the array should be: "The highest price of AAPL in the last 5 days was 180.33"
            The test will check for this exact string.
    The stock ticker should be capitalised.
    The price should be shown with exactly 2 decimal places.
*/
function highestPriceDescriptions(closingPricesForAllStocks, stocks) {
  let highestPriceDescription = [];
  let item = 0;
  for (let closingPricesForOneStock of closingPricesForAllStocks) {
    highestPrice = closingPricesForOneStock[0];
    for (i = 0; i < closingPricesForOneStock.length; i++) {
      if (closingPricesForOneStock[i] > highestPrice) {
        highestPrice = closingPricesForOneStock[i];
      }
    }
    let stocksUpperCase = stocks[item].toUpperCase();
    highestPriceDescription.push(
      `The highest price of ${stocksUpperCase} in the last 5 days was ${highestPrice.toFixed(
        2
      )}`
    );
    item++;
  }
  return highestPriceDescription;
}

/* ======= TESTS - DO NOT MODIFY ===== */
test("should return the average price for each stock", () => {
  expect(getAveragePrices(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS)).toEqual([
    176.89, 335.66, 3405.66, 2929.22, 1041.93,
  ]);
});

test("should return the price change for each stock", () => {
  expect(getPriceChanges(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS)).toEqual([
    -6.2, -13.4, 23.9, -82.43, -162.77,
  ]);
});

test("should return a description of the highest price for each stock", () => {
  expect(
    highestPriceDescriptions(CLOSING_PRICES_LAST_5_DAYS_FOR_ALL_STOCKS, STOCKS)
  ).toEqual([
    "The highest price of AAPL in the last 5 days was 180.33",
    "The highest price of MSFT in the last 5 days was 342.45",
    "The highest price of AMZN in the last 5 days was 3421.37",
    "The highest price of GOOGL in the last 5 days was 2958.13",
    "The highest price of TSLA in the last 5 days was 1101.30",
  ]);
});
