

function decimalToBinary(decimalNum) {
  let binaryNum = "";
  
  if (decimalNum === 0) {
    return "0";
  }
  
  while (decimalNum > 0) {
    binaryNum = (decimalNum % 2) + binaryNum;
    decimalNum = Math.floor(decimalNum / 2);
  }
  
  return binaryNum;
}

// Example usage
console.log(decimalToBinary(7));    // Output: 111
console.log(decimalToBinary(10));   // Output: 1010
console.log(decimalToBinary(33));   // Output: 100001



// // function threeSum(arr, target) 
// // // write your code here
  
// // }

// // module.exports = threeSum;


// function letterCombinations(digits) {
//   if (digits.length === 0) {
//     return []; // Return an empty array for an empty digit string
//   }

//   const digitToLetters = {
//     '2': 'abc',
//     '3': 'def',
//     '4': 'ghi',
//     '5': 'jkl',
//     '6': 'mno',
//     '7': 'pqrs',
//     '8': 'tuv',
//     '9': 'wxyz',
//   };

//   const combinations = ['']; // Start with an empty combination

//   for (const digit of digits) {
//     const letters = digitToLetters[digit];
//     const newCombinations = [];

//     for (const combination of combinations) {
//       for (const letter of letters) {
//         newCombinations.push(combination + letter);
//       }
//     }

//     combinations.length = 0; // Clear the existing combinations
//     combinations.push(...newCombinations); // Add new combinations
//   }

//   return combinations.sort(); // Sort the combinations lexicographically
// }

// // Example usage
// const digits = '23';
// const result = letterCombinations(digits);
// console.log(result);

