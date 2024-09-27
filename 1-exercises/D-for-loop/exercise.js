/*
    for loops can be useful when we already know exactly how many times we want to loop.

    Below we have 2 arrays which have exactly the same number of values.
        - The first array is a list of writers
        - The second array is a list of ages
    The writers in the first array correspond with the ages in the second array.
    For example, Virginia Woolf is 59 years old.

    Using a for loop, output to the console a line about the age of each writer.
*/

const WRITERS = [
  "Virginia Woolf",
  "Zadie Smith",
  "Jane Austen",
  "Bell Hooks",
  "Yukiko Motoya",
];

const AGES = [59, 40, 41, 63, 49];

// TODO - Write for loop code here

for (let i = 0; i < WRITERS.length; i++) {
  console.log(`${WRITERS[i]} is ${AGES[i]} years old`);
}

/*
The output should look something like this:

Virginia Woolf is 59 years old
Zadie Smith is 40 years old
Jane Austen is 41 years old
Bell Hooks is 63 years old
Yukiko Motoya is 49 years old
*/
