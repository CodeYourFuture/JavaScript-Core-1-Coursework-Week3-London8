/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
  // TODO: iterate over all the articles in the input array and check if the article string is less than or equal to 65, if true: add to validTitleArr array.
  let numberOfTitles = allArticleTitles.length;
  let validTitleArr = [];
  for (i = 0; i < numberOfTitles; i++) {
    if (allArticleTitles[i].length <= 65) {
      validTitleArr.push(allArticleTitles[i]);
    }
  }
  return validTitleArr;
}

/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/
function titleWithFewestWords(allArticleTitles) {
  // TODO: for each article string, split the string and count the number of words which should equal the number of array items. If the current number of array items is less than the value stored in the  shortestTitle variable, set current article title as the new value.
  let shortestTitle = "";
  for (const article of allArticleTitles) {
    let wordsInTitleArr = article.split(" ");
    let shortestTitleArr = shortestTitle.split(" ");
    let wordCount = wordsInTitleArr.length;
    let shortestTitleCount = shortestTitleArr.length;
    if (wordCount < shortestTitleCount || shortestTitle === "") {
      shortestTitle = article;
    }
  }
  return shortestTitle;
}

/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/
function headlinesWithNumbers(allArticleTitles) {
  // TODO: iterate through each title, and iterate each character to check if character is a number. if true add to new array.
  const articlesWithNumbers = [];
  let numberOfArticles = allArticleTitles.length;
  console.log(numberOfArticles);
  for (let i = 0; i < numberOfArticles; i++) {
    if (/[0-9]/.test(allArticleTitles[i])) {
      articlesWithNumbers.push(allArticleTitles[i]);
    }
  }
  return articlesWithNumbers;
}

/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/
function averageNumberOfCharacters(allArticleTitles) {
  // TODO: iterate through each title, and iterate each character. for each character add +1 to characterCount. divide characterCount by the number of articles. Use Math.round method
  let characterCount = 0;
  let numberOfArticles = allArticleTitles.length;
  for (const article of allArticleTitles) {
    for (const character of article) {
      characterCount++;
    }
  }
  return Math.round(characterCount / numberOfArticles);
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
