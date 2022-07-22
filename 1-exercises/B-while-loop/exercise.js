/*
    while loops can be useful when you want to execute some code as long as some condition is true.    

    Using a while loop, complete the function below so it logs (using console.log) the first n even numbers as a comma-seperated string.
    The list of numbers should start with 0. n is being passed in as a parameter.
*/

//PSEUDO CODE - display even numbers starting at a 0 and ending the n amount of Times passed in.

function evenNumbers(n) {
  // TODO

  let i = 0;
  let evenArr = [];

  while (i < n) {
    //increment i
    evenArr.push(i * 2);
    i++;
  }
  console.log(evenArr.join(", "));
}

evenNumbers(3); // should output 0,2,4
evenNumbers(0); // should output nothing
evenNumbers(10); // should output 0,2,4,6,8,10,12,14,16,18

// let i = 0;
// let count = 0;
// let output = "";

// while (i < n) {
//   output += count + ",";
//   count += 2;
//   i++;
// }
