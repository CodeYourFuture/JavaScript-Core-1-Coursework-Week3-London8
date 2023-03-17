/*
    Loops can be useful when working with arrays.
    In the below example, imagine we've defined an array holding the birthdays of your closest friends.
    Use a while loop to search through the array until you find the first birthday in July, then return that birthday from the function.
*/

const BIRTHDAYS = [
  "January 7th",
  "February 12th",
  "April 3rd",
  "April 5th",
  "May 3rd",
  "July 11th",
  "July 17th",
  "September 28th",
  "November 15th",
];

function findFirstJulyBDay(birthdays) {
  let numberOfBirthdays = BIRTHDAYS.length;
  for (let i = 0; i < numberOfBirthdays; i++) {
    if (BIRTHDAYS[i].includes("July")) {
      return BIRTHDAYS[i];
      break;
    }
  }
  // TODO
}

console.log(findFirstJulyBDay(BIRTHDAYS)); // should output "July 11th"
