// Using Anonymous Functions
var array1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Print odd numbers in an array
const printOddNumbers1 = function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers1(array1);

// Convert all the strings to title caps in a string array
const convertToTitleCaps1 = function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};
console.log(convertToTitleCaps1(["hello", "world", "example"]));

// Sum of all numbers in an array
const sumOfNumbers1 = function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumOfNumbers1(array1));

// Return all the prime numbers in an array
const returnPrimes1 = function (arr) {
  return arr.filter((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  });
};
console.log(returnPrimes1(array1));

// Return all the palindromes in an array
const returnPalindromes1 = function (arr) {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};
console.log(returnPalindromes1(["madam", "hello", "level", "world"]));

// Return median of two sorted arrays of the same size.
const medianOfTwoArrays1 = function (arr1, arr2) {
  const combined = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(combined.length / 2);
  return combined.length % 2 !== 0
    ? combined[mid]
    : (combined[mid - 1] + combined[mid]) / 2;
};
console.log(medianOfTwoArrays1([1, 3, 5], [2, 4, 6]));

// Remove duplicates from an array
const removeDuplicates1 = function (arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
};
console.log(removeDuplicates1(array1));

// Rotate an array by k times
const rotateArray1 = function (arr, k) {
  k %= arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
};
console.log(rotateArray1(array1, 2));

// Using IIFE----------------------------------------------------------
var array2 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 0];

// Print odd numbers in an array
(function (arr) {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
})(array2);

// Convert all the strings to title caps in a string array
const titleCaps2 = (function (arr) {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
})(["hello", "world", "example"]);
console.log(titleCaps2);

// Sum of all numbers in an array
const sum2 = (function (arr) {
  return arr.reduce((acc, curr) => acc + curr, 0);
})(array2);
console.log(sum2);

// Return all the prime numbers in an array
const primes2 = (function (arr) {
  return arr.filter((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  });
})(array2);
console.log(primes2);

// Return all the palindromes in an array
const palindromes2 = (function (arr) {
  return arr.filter((str) => str === str.split("").reverse().join(""));
})(["madam", "hello", "level", "world"]);
console.log(palindromes2);

// Return median of two sorted arrays of the same size.
const median2 = (function (arr1, arr2) {
  const combined = [...arr1, ...arr2].sort((a, b) => a - b);
  const mid = Math.floor(combined.length / 2);
  return combined.length % 2 !== 0
    ? combined[mid]
    : (combined[mid - 1] + combined[mid]) / 2;
})([1, 3, 5], [2, 4, 6]);
console.log(median2);

// Remove duplicates from an array
const removeDuplicates2 = (function (arr) {
  return arr.filter((value, index) => arr.indexOf(value) === index);
})(array2);
console.log(removeDuplicates2);

// Rotate an array by k times
const rotateArray2 = (function (arr, k) {
  k %= arr.length;
  return [...arr.slice(k), ...arr.slice(0, k)];
})(array2, 2);
console.log(rotateArray2);

// Using Arrow Functions--------------------------------------------
const array3 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// Print odd numbers in an array
const printOddNumbers3 = (arr) => {
  arr.forEach((num) => {
    if (num % 2 !== 0) {
      console.log(num);
    }
  });
};
printOddNumbers3(array3);

// Convert all the strings to title caps in a string array
const convertToTitleCaps3 = (arr) => {
  return arr.map(
    (str) => str.charAt(0).toUpperCase() + str.slice(1).toLowerCase()
  );
};
console.log(convertToTitleCaps3(["hello", "world", "example"]));

// Sum of all numbers in an array
const sumOfNumbers3 = (arr) => {
  return arr.reduce((acc, curr) => acc + curr, 0);
};
console.log(sumOfNumbers3(array3));

// Return all the prime numbers in an array
const returnPrimes3 = (arr) => {
  return arr.filter((num) => {
    for (let i = 2; i <= Math.sqrt(num); i++) {
      if (num % i === 0) return false;
    }
    return num > 1;
  });
};
console.log(returnPrimes3(array3));

// Return all the palindromes in an array
const returnPalindromes3 = (arr) => {
  return arr.filter((str) => str === str.split("").reverse().join(""));
};
console.log(returnPalindromes3(["madam", "hello", "level", "world"]));
