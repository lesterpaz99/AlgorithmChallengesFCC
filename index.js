//CONVERT CELCIUS TO FAHRENHEIT
const convertToF = (celsius) => {
  let fahrenheit = (celsius * 9) / 5 + 32;
  return fahrenheit;
}

console.log(convertToF(30));

//REVERSE A STRING
const reverseString = (str) => {
  let reverseStr = [...str].reverse();
  return reverseStr.toString().replace(/,/g, '');
}

console.log(reverseString('hello'));

//FACTORIALIZE A NUMBER
const factorialize = (num) => {
  if (num >= 0) {
    let acum = 1;
    for (let i = 1; i <=num; i++) {
      acum *= i;
    }
    return acum;
  }
  return 'Insert a number greater than or equal to zero';
}

console.log(factorialize(5));

//FIND THE LONGEST WORD IN A STRING
const findLongestWordLength = (str) => {
  let words = str.match(/\w*(\S)/g);
  let longestWord = 0;
  for (let word of words) {
    if (word.length > longestWord) {
      longestWord = word.length;
    }
  }
  return longestWord;
}

console.log(findLongestWordLength('The quick brown fox jumped over the lazy dog'));

//RETURN LARGEST NUMBERS IN ARRAYS
/*Return an array consisting of the largest number from each provided sub-array. For simplicity, the provided array will contain exactly 4 sub-arrays.*/
const largestOfFour = (arr) => {
  let largestNumbers = [];
  for (let i of arr) {
    let largest = i[0];
    for (let j of i) {
      if (j > largest) {
        largest = j;
      }
    }
    largestNumbers.push(largest);
  }
  return largestNumbers;
}

let result = largestOfFour([[17, 23, 25, 12], [25, 7, 34, 48], [4, -10, 18, 21], [-72, -3, -17, -10]]);

console.log(result);

//CONFIRM THE ENDING
/*Check if a string (first argument, str) ends with the given target string (second argument, target).

This challenge can be solved with the .endsWith() method, which was introduced in ES2015. But for the purpose of this challenge, we would like you to use one of the JavaScript substring methods instead.*/
const confirmEnding = (str, target) => {
  const regex = new RegExp(`${target}$`);
  return regex.test(str);
}

console.log(confirmEnding('Bastian', 'n'));
console.log(confirmEnding('Congratulation', 'on'));
console.log(confirmEnding('Open sesame', 'game'));