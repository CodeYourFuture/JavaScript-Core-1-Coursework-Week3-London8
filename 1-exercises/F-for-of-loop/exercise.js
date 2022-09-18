/*
    A for-of loop is an easy way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
    "Aldgate",
    "Baker Street",
    "Picadilly Circus",
    "Oxford Street",
    "Tottenham Court Road"
 ];
 for (let tubeStation of tubeStations) {
    console.log(tubeStation);
    console.log("**********************");
 }
 // TODO Use a for-of loop to capitalise and output each letter in the string seperately.
 let str = "codeyourfuture";
 
 for (let s of str) {
    console.log(s.toUpperCase());
 }