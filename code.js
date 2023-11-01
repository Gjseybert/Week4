let ages = [3, 9, 23, 64, 2, 8, 28, 93];

// Subtract the first element from the last element programmatically
let lastIndex = ages.length - 1;
let ageDifference = ages[lastIndex] - ages[0];
console.log("Age difference:", ageDifference);

// Add a new age to the array and calculate the dynamic difference
ages.push(35); // Adding a new age
lastIndex = ages.length - 1; // Recalculate the last index
ageDifference = ages[lastIndex] - ages[0];
console.log("Dynamic age difference:", ageDifference);

// Calculate the average age using a loop
let sum = 0;
for (let i = 0; i < ages.length; i++) {
    sum += ages[i];
}
let averageAge = sum / ages.length;
console.log("Average age:", averageAge);


let names = ['Sam', 'Tommy', 'Tim', 'Sally', 'Buck', 'Bob'];

// Calculate the average number of letters per name using a loop
let totalLetters = 0;
for (let i = 0; i < names.length; i++) {
    totalLetters += names[i].length;
}
let averageLetters = totalLetters / names.length;
console.log("Average letters per name:", averageLetters);

// Concatenate all names together with spaces
let concatenatedNames = names.join(' ');
console.log("Concatenated names:", concatenatedNames);

let nameLengths = [];
for (let i = 0; i < names.length; i++) {
    nameLengths.push(names[i].length);
}

// Calculate the sum of name lengths using a loop
let sumOfNameLengths = nameLengths.reduce((acc, length) => acc + length, 0);
console.log("Sum of name lengths:", sumOfNameLengths);

function repeatWord(word, n) {
  return word.repeat(n);
}
console.log(repeatWord('Hello', 3)); // Outputs 'HelloHelloHello'

function createFullName(firstName, lastName) {
  return `${firstName} ${lastName}`;
}
console.log(createFullName('John', 'Doe')); // Outputs 'John Doe'

function isSumGreaterThan100(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum > 100;
}
console.log(isSumGreaterThan100([30, 40, 35])); // Outputs true

function isSumGreaterThan100(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum > 100;
}
console.log(isSumGreaterThan100([30, 40, 35])); // Outputs true

function calculateAverage(numbers) {
  let sum = numbers.reduce((acc, num) => acc + num, 0);
  return sum / numbers.length;
}
console.log(calculateAverage([10, 20, 30])); // Outputs 20

function isAverageGreaterThan(arr1, arr2) {
  const average1 = calculateAverage(arr1);
  const average2 = calculateAverage(arr2);
  return average1 > average2;
}
console.log(isAverageGreaterThan([10, 20, 30], [5, 15, 25])); // Outputs true

function willBuyDrink(isHotOutside, moneyInPocket) {
  return isHotOutside && moneyInPocket > 10.50;
}
console.log(willBuyDrink(true, 12.00)); // Outputs true
