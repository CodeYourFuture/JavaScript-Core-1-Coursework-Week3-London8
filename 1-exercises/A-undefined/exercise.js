/*
    By now, you would have already seen "undefined", either in an error message or being output from your program.
    But what does it mean? undefined represents the absence of a value.
    
    In some cases, undefined will be used by a programmer intentionally, and they will write code to handle it.
    But usually, when you see undefined - it means something has gone wrong!

    Below are 4 typical examples of when you would see undefined.
    For each example, can you explain why we are seeing undefined?
*/

// Example 1 a is not defined
let a;
console.log(a);


// Example 2 there is no arguments passed to function call o line 22
function sayHello() {
    let message = "Hello";
}

let hello = sayHello();
console.log(hello);


// Example 3 here there is no arguments passed when we calling function (line 31) and missing variable 
function sayHelloToUser(user) {
    console.log(`Hello ${user}`);
}

sayHelloToUser();


// Example 4 its console.log 3 item in array which dont exist 
let arr = [1,2,3];
console.log(arr[3]);
