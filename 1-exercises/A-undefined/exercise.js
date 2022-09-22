/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1
let a; // The variable a is declared but not assign to any value. Trying to print it will bring undefined 
console.log(a);


// Example 2
function sayHello() {
    let message = "Hello";// The function sayHello() has no return so, console.log(hello) 
    // will attempt to print empty variable.
}

let hello = sayHello();
console.log(hello);


// Example 3
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();//The function is called with no parameter, it will attempt to print unrefered variable which will be undefined
// e.g: sayHelloToUser("Barry");

// Example 4
let arr = [1,2,3];// The array has tree elements and 0 to 2 indexes. 
console.log(arr[3]);// console.log(arr[3]) will attempt to print non existing element (4th element).
