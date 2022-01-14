/*
    A for-of loop is a easy and way of looping through the elements of an array, string or any other "iterable object" (think sequence of elements).    
*/

// TODO Use a for-of loop to output each of the tube stations below.
let tubeStations = [
    "Aldgate",
    "Baker Street",
    "Picadilly Circus",
    "Oxford Street",
    "Tottenham Court Road"
];

for (let name of tubeStations) {
    console.log(name);
}


// TODO Use a for-of loop to capitalise and output each letter in the string seperately.
let str = "codeyourfuture";

for (let letters of str){
    console.log (letters.toUpperCase())
}
