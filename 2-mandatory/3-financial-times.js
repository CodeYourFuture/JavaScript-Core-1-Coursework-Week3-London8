/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
  // TODO
  let potentialArticles = [];
  let index = 0;
  if (allArticleTitles.length > 0) {
    for (let i = 0; i < allArticleTitles.length; i++) {
      if (allArticleTitles[i].length <= 65) {
        potentialArticles[index] = allArticleTitles[i];
        index++;
      }
    }
    return potentialArticles;
  } else return allArticleTitles;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
  // TODO
  let listOfWordCount = [];
  for (let i = 0; i < allArticleTitles.length; i++) {
    let currentPosition = 0;
    let wordCount = 0;

    while (currentPosition !== -1) {
      currentPosition = allArticleTitles[i].indexOf(" ", currentPosition + 1);
      wordCount++;
    }
    listOfWordCount[i] = wordCount;
  }
  let lowestNumber = listOfWordCount[0];
  for (let i = 1; i <= listOfWordCount.length; i++) {
    if (lowestNumber > listOfWordCount[i]) {
      lowestNumber = listOfWordCount[i];
    }
  }
  return allArticleTitles[listOfWordCount.indexOf(lowestNumber)];
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
  // TODO
  let allArticlesWithNumber = [];
  let numbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
  let index = 0;
  for (let i = 0; i < allArticleTitles.length; i++) {
    for (let j = 0; j < numbers.length; j++) {
      if (allArticleTitles[i].includes(numbers[j])) {
        allArticlesWithNumber[index] = allArticleTitles[i];
        j = numbers.length - 1;
        index++;
      }
    }
  }
  return allArticlesWithNumber;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
  // TODO
  let number = 0;
  for (let i = 0; i < allArticleTitles.length; i++)
    number += allArticleTitles[i].length;
  return Math.round(number / allArticleTitles.length);
}

/* ======= List of Articles - DO NOT MODIFY ===== */
const ARTICLE_TITLES = [
  "Streaming wars drive media groups to spend more than $100bn on new content",
  "Amazon Prime Video India country head: streaming is driving a TV revolution",
  "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights",
  "British companies look to muscle in on US retail investing boom",
  "Libor to take firm step towards oblivion on New Year's Day",
  "Audit profession unattractive to new recruits, says PwC boss",
  "Chinese social media users blast Elon Musk over near miss in space",
  "Companies raise over $12tn in 'blockbuster' year for global capital markets",
  "The three questions that dominate investment",
  "Brussels urges Chile's incoming president to endorse EU trade deal",
];

/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", () => {
  expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(
    new Set([
      "British companies look to muscle in on US retail investing boom",
      "Libor to take firm step towards oblivion on New Year's Day",
      "Audit profession unattractive to new recruits, says PwC boss",
      "The three questions that dominate investment",
    ])
  );
});

test("should return an empty array for empty input", () => {
  expect(potentialHeadlines([])).toEqual([]);
});

test("should return the title with the fewest words", () => {
  expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual(
    "The three questions that dominate investment"
  );
});

test("should only return headlines containing numbers", () => {
  expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(
    new Set([
      "Streaming wars drive media groups to spend more than $100bn on new content",
      "Companies raise over $12tn in 'blockbuster' year for global capital markets",
    ])
  );
});

test("should return the average number of characters in a headline", () => {
  expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});
