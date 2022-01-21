"use strict";

/*
    Imagine you are working on the Financial Times web site! They have a list of article titles stored in an array.

    The home page of the web site has a headline section, which only has space for article titles which are 65 characters or less.
    Implement the function below, which will return a new array containing only article titles which will fit.
*/
function potentialHeadlines(allArticleTitles) {
  var newTitleArr = [];

  for (var i = 0; i < allArticleTitles.length; i++) {
    if (allArticleTitles[i].length <= 65) {
      newTitleArr.push(allArticleTitles[i]);
    }
  }

  return newTitleArr;
}
/*
    The editor of the FT likes short headlines with only a few words!
    Implement the function below, which returns the title with the fewest words.
    (you can assume words will always be seperated by a space)
*/


function titleWithFewestWords(allArticleTitles) {
  var wordNum = allArticleTitles[0].split(" ").length;
  var withLessWords;

  for (var i = 1; i < allArticleTitles.length; i++) {
    if (allArticleTitles[i].split(" ").length < wordNum) {
      wordNum = allArticleTitles[i].split(" ").length;
      withLessWords = allArticleTitles[i];
    }
  }

  return withLessWords;
}
/*
    The editor of the FT has realised that headlines which have numbers in them get more clicks!
    Implement the function below to return a new array containing all the headlines which contain a number.
    (Hint: remember that you can also loop through the characters of a string if you need to)
*/


function headlinesWithNumbers(allArticleTitles) {
  var titleWithNum = [];
  allArticleTitles.forEach(function (sentence) {
    if (/[0-9]/g.test(sentence)) {
      titleWithNum.push(sentence);
    }
  }); //   console.log(titleWithNum);

  return titleWithNum;
}
/*
    The Financial Times wants to understand what the average number of characters in an article title is.
    Implement the function below to return this number - rounded to the nearest integer.
*/


function averageNumberOfCharacters(allArticleTitles) {
  var total = 0;

  for (var i = 0; i < allArticleTitles.length; i++) {
    total += allArticleTitles[i].length;
  }

  var average = total / allArticleTitles.length;
  return Math.round(average);
}
/* ======= List of Articles - DO NOT MODIFY ===== */


var ARTICLE_TITLES = ["Streaming wars drive media groups to spend more than $100bn on new content", "Amazon Prime Video India country head: streaming is driving a TV revolution", "Aerospace chiefs prepare for bumpy ride in recovery of long-haul flights", "British companies look to muscle in on US retail investing boom", "Libor to take firm step towards oblivion on New Year's Day", "Audit profession unattractive to new recruits, says PwC boss", "Chinese social media users blast Elon Musk over near miss in space", "Companies raise over $12tn in 'blockbuster' year for global capital markets", "The three questions that dominate investment", "Brussels urges Chile's incoming president to endorse EU trade deal"];
/* ======= TESTS - DO NOT MODIFY ===== */

test("should only return potential headlines", function () {
  expect(new Set(potentialHeadlines(ARTICLE_TITLES))).toEqual(new Set(["British companies look to muscle in on US retail investing boom", "Libor to take firm step towards oblivion on New Year's Day", "Audit profession unattractive to new recruits, says PwC boss", "The three questions that dominate investment"]));
});
test("should return an empty array for empty input", function () {
  expect(potentialHeadlines([])).toEqual([]);
});
test("should return the title with the fewest words", function () {
  expect(titleWithFewestWords(ARTICLE_TITLES)).toEqual("The three questions that dominate investment");
});
test("should only return headlines containing numbers", function () {
  expect(new Set(headlinesWithNumbers(ARTICLE_TITLES))).toEqual(new Set(["Streaming wars drive media groups to spend more than $100bn on new content", "Companies raise over $12tn in 'blockbuster' year for global capital markets"]));
});
test("should return the average number of characters in a headline", function () {
  expect(averageNumberOfCharacters(ARTICLE_TITLES)).toEqual(65);
});