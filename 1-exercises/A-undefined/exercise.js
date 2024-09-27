/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a;
console.log(a);

//We are declaring a variable here, but never assigning it to a value - therefore the variable is undefined.

// Example 2
function sayHello() {
  let message = "Hello";
}

let hello = sayHello();
console.log(hello);

//Here,we are assigning the value returned from the function sayHello to the variable hello. But sayHello doesn't actually return anything, so hello is undefined.

// Example 3
function sayHelloToUser(user) {
  console.log(`Hello ${user}`);
}

sayHelloToUser();

//Here, we have a function which takes a parameter called user.But when we call the function, we're not passing in any arguments - there's nothing in the brackets!Because of this, the value of the user parameter inside the function is undefined.

// Example 4
let arr = [1, 2, 3];
console.log(arr[3]);

//Here, we are trying to retrieve an element from the array at index 3.But in this case, the array doesn't have any value at index 3 - it only has values at indexes 0, 1 and 2.Therefore, retrieving an element from index 3 will give us undefined.
