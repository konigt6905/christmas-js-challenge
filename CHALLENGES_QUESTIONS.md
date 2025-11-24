# Christmas JavaScript Challenge - Improved 90 Challenges (Version 2)

## Design Philosophy - SIMPLIFIED
- **Easy (1-30)**: 1-2 lines initially, gradually to 3-4 lines max
- **Medium (31-60)**: 3-5 lines max
- **Hard (61-90)**: 5-8 lines max
- **Truly Beginner-Friendly**: Simple, clear concepts that build progressively
- **Practical**: Real programming patterns, not puzzles

---

## EASY LEVEL (Challenges 1-30)
### Ultra Simple Start (1-2 lines)

### Challenge 1: Return a Greeting
**Description**: Create a function that returns the string "Merry Christmas!"
**Hint**: Use the return keyword followed by the string.
**Starter Code**:
```javascript
function greeting() {
  // your code here
}
```
**Solution**:
```javascript
function greeting() {
  return "Merry Christmas!";
}
```
**Test Code**:
```javascript
return greeting() === "Merry Christmas!";
```

---

### Challenge 2: Add Two Numbers
**Description**: Create a function that adds two numbers together and returns the result.
**Hint**: Use the + operator to add the numbers.
**Starter Code**:
```javascript
function add(a, b) {
  // your code here
}
```
**Solution**:
```javascript
function add(a, b) {
  return a + b;
}
```
**Test Code**:
```javascript
return add(2, 3) === 5;
```

---

### Challenge 3: Get Array Length
**Description**: Create a function that returns the number of items in an array.
**Hint**: Arrays have a .length property.
**Starter Code**:
```javascript
function getLength(arr) {
  // your code here
}
```
**Solution**:
```javascript
function getLength(arr) {
  return arr.length;
}
```
**Test Code**:
```javascript
return getLength([1, 2, 3, 4]) === 4;
```

---

### Challenge 4: Check If Greater
**Description**: Create a function that returns true if num is greater than 10, otherwise false.
**Hint**: Use the > comparison operator.
**Starter Code**:
```javascript
function isGreaterThan10(num) {
  // your code here
}
```
**Solution**:
```javascript
function isGreaterThan10(num) {
  return num > 10;
}
```
**Test Code**:
```javascript
return isGreaterThan10(15) === true && isGreaterThan10(5) === false;
```

---

### Challenge 5: Get First Element
**Description**: Create a function that returns the first element of an array.
**Hint**: Array indices start at 0, so use array[0].
**Starter Code**:
```javascript
function getFirst(arr) {
  // your code here
}
```
**Solution**:
```javascript
function getFirst(arr) {
  return arr[0];
}
```
**Test Code**:
```javascript
return getFirst(['a', 'b', 'c']) === 'a';
```

---

### Challenge 6: Multiply by Two
**Description**: Create a function that multiplies a number by 2.
**Hint**: Use the * operator.
**Starter Code**:
```javascript
function double(num) {
  // your code here
}
```
**Solution**:
```javascript
function double(num) {
  return num * 2;
}
```
**Test Code**:
```javascript
return double(5) === 10;
```

---

### Challenge 7: Check Age
**Description**: Create a function that returns "adult" if age is 18 or over, otherwise "child".
**Hint**: Use an if statement to check if age >= 18.
**Starter Code**:
```javascript
function checkAge(age) {
  // your code here
}
```
**Solution**:
```javascript
function checkAge(age) {
  if (age >= 18) return "adult";
  return "child";
}
```
**Test Code**:
```javascript
return checkAge(20) === "adult" && checkAge(15) === "child";
```

---

### Challenge 8: Get Last Element
**Description**: Create a function that returns the last element of an array.
**Hint**: Use arr[arr.length - 1].
**Starter Code**:
```javascript
function getLast(arr) {
  // your code here
}
```
**Solution**:
```javascript
function getLast(arr) {
  return arr[arr.length - 1];
}
```
**Test Code**:
```javascript
return getLast([1, 2, 3]) === 3;
```

---

### Challenge 9: Subtract Numbers
**Description**: Create a function that subtracts b from a.
**Hint**: Use the - operator.
**Starter Code**:
```javascript
function subtract(a, b) {
  // your code here
}
```
**Solution**:
```javascript
function subtract(a, b) {
  return a - b;
}
```
**Test Code**:
```javascript
return subtract(10, 3) === 7;
```

---

### Challenge 10: Is Even
**Description**: Create a function that returns true if a number is even, false if odd.
**Hint**: Use the modulo operator (%) - even numbers have remainder 0 when divided by 2.
**Starter Code**:
```javascript
function isEven(num) {
  // your code here
}
```
**Solution**:
```javascript
function isEven(num) {
  return num % 2 === 0;
}
```
**Test Code**:
```javascript
return isEven(4) === true && isEven(7) === false;
```

---

### Challenge 11: Count to N
**Description**: Create a function that returns an array of numbers from 1 to n.
**Hint**: Use a for loop to add numbers to an array.
**Starter Code**:
```javascript
function countToN(n) {
  // your code here
}
```
**Solution**:
```javascript
function countToN(n) {
  const arr = [];
  for (let i = 1; i <= n; i++) {
    arr.push(i);
  }
  return arr;
}
```
**Test Code**:
```javascript
const result = countToN(3); return result.length === 3 && result[2] === 3;
```

---

### Challenge 12: Sum Array
**Description**: Create a function that adds all numbers in an array.
**Hint**: Start with sum = 0, then loop through the array adding each number.
**Starter Code**:
```javascript
function sumArray(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function sumArray(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum;
}
```
**Test Code**:
```javascript
return sumArray([1, 2, 3, 4]) === 10;
```

---

### Challenge 13: Personalized Greeting
**Description**: Create a function that returns "Hello, [name]!" where [name] is the provided name.
**Hint**: Use template literals or string concatenation.
**Starter Code**:
```javascript
function sayHello(name) {
  // your code here
}
```
**Solution**:
```javascript
function sayHello(name) {
  return `Hello, ${name}!`;
}
```
**Test Code**:
```javascript
return sayHello("Santa") === "Hello, Santa!";
```

---

### Challenge 14: String Length
**Description**: Create a function that returns the length of a string.
**Hint**: Strings have a .length property just like arrays.
**Starter Code**:
```javascript
function getStringLength(str) {
  // your code here
}
```
**Solution**:
```javascript
function getStringLength(str) {
  return str.length;
}
```
**Test Code**:
```javascript
return getStringLength("hello") === 5;
```

---

### Challenge 15: Maximum of Two
**Description**: Create a function that returns the larger of two numbers.
**Hint**: Use an if statement to compare the numbers.
**Starter Code**:
```javascript
function max(a, b) {
  // your code here
}
```
**Solution**:
```javascript
function max(a, b) {
  if (a > b) return a;
  return b;
}
```
**Test Code**:
```javascript
return max(5, 10) === 10;
```

---

### Challenge 16: Count Positives
**Description**: Create a function that counts how many positive numbers are in an array.
**Hint**: Loop through the array and count numbers greater than 0.
**Starter Code**:
```javascript
function countPositives(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function countPositives(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] > 0) count++;
  }
  return count;
}
```
**Test Code**:
```javascript
return countPositives([1, -2, 3, -4, 5]) === 3;
```

---

### Challenge 17: Repeat String
**Description**: Create a function that repeats a string n times.
**Hint**: Use a loop to build a result string.
**Starter Code**:
```javascript
function repeatString(str, n) {
  // your code here
}
```
**Solution**:
```javascript
function repeatString(str, n) {
  let result = '';
  for (let i = 0; i < n; i++) {
    result += str;
  }
  return result;
}
```
**Test Code**:
```javascript
return repeatString("ha", 3) === "hahaha";
```

---

### Challenge 18: Find in Array
**Description**: Create a function that returns true if a value exists in an array, false otherwise.
**Hint**: Loop through the array and check if any element equals the value.
**Starter Code**:
```javascript
function contains(arr, value) {
  // your code here
}
```
**Solution**:
```javascript
function contains(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return true;
  }
  return false;
}
```
**Test Code**:
```javascript
return contains([1, 2, 3], 2) === true && contains([1, 2, 3], 5) === false;
```

---

### Challenge 19: Absolute Value
**Description**: Create a function that returns the absolute value of a number (always positive).
**Hint**: If the number is negative, multiply by -1.
**Starter Code**:
```javascript
function absolute(num) {
  // your code here
}
```
**Solution**:
```javascript
function absolute(num) {
  if (num < 0) return num * -1;
  return num;
}
```
**Test Code**:
```javascript
return absolute(-5) === 5 && absolute(5) === 5;
```

---

### Challenge 20: Reverse Array
**Description**: Create a function that reverses an array.
**Hint**: Loop backwards through the array and push elements to a new array.
**Starter Code**:
```javascript
function reverseArray(arr) {
  // your code here
}
```
**Solution**:
```javascript
function reverseArray(arr) {
  const reversed = [];
  for (let i = arr.length - 1; i >= 0; i--) {
    reversed.push(arr[i]);
  }
  return reversed;
}
```
**Test Code**:
```javascript
const r = reverseArray([1, 2, 3]); return r[0] === 3 && r[2] === 1;
```

---

### Challenge 21: Average of Array
**Description**: Create a function that calculates the average of numbers in an array.
**Hint**: Sum all numbers, then divide by the array length. Handle empty arrays by returning 0.
**Starter Code**:
```javascript
function average(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function average(numbers) {
  if (numbers.length === 0) return 0;
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }
  return sum / numbers.length;
}
```
**Test Code**:
```javascript
return average([10, 20, 30]) === 20 && average([]) === 0;
```

---

### Challenge 22: Uppercase First Letter
**Description**: Create a function that capitalizes the first letter of a string.
**Hint**: Get first character with [0], uppercase it, then add the rest with slice(1).
**Starter Code**:
```javascript
function capitalize(str) {
  // your code here
}
```
**Solution**:
```javascript
function capitalize(str) {
  return str[0].toUpperCase() + str.slice(1);
}
```
**Test Code**:
```javascript
return capitalize("hello") === "Hello";
```

---

### Challenge 23: Count Evens
**Description**: Create a function that counts how many even numbers are in an array.
**Hint**: Loop and count numbers where num % 2 === 0.
**Starter Code**:
```javascript
function countEvens(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function countEvens(numbers) {
  let count = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) count++;
  }
  return count;
}
```
**Test Code**:
```javascript
return countEvens([1, 2, 3, 4, 5, 6]) === 3;
```

---

### Challenge 24: Join Strings
**Description**: Create a function that joins all strings in an array with a space between them.
**Hint**: Loop through the array building a result string.
**Starter Code**:
```javascript
function joinStrings(words) {
  // your code here
}
```
**Solution**:
```javascript
function joinStrings(words) {
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    result += ' ' + words[i];
  }
  return result;
}
```
**Test Code**:
```javascript
return joinStrings(["Merry", "Christmas"]) === "Merry Christmas";
```

---

### Challenge 25: Find Maximum
**Description**: Create a function that finds the largest number in an array.
**Hint**: Start with first number as max, compare with all others.
**Starter Code**:
```javascript
function findMax(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function findMax(numbers) {
  let max = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > max) max = numbers[i];
  }
  return max;
}
```
**Test Code**:
```javascript
return findMax([3, 7, 2, 9, 1]) === 9;
```

---

### Challenge 26: Remove First
**Description**: Create a function that returns an array with the first element removed.
**Hint**: Use slice(1) to get everything except the first element.
**Starter Code**:
```javascript
function removeFirst(arr) {
  // your code here
}
```
**Solution**:
```javascript
function removeFirst(arr) {
  return arr.slice(1);
}
```
**Test Code**:
```javascript
const r = removeFirst([1, 2, 3]); return r.length === 2 && r[0] === 2;
```

---

### Challenge 27: Square Number
**Description**: Create a function that squares a number (multiplies it by itself).
**Hint**: Multiply the number by itself.
**Starter Code**:
```javascript
function square(num) {
  // your code here
}
```
**Solution**:
```javascript
function square(num) {
  return num * num;
}
```
**Test Code**:
```javascript
return square(5) === 25;
```

---

### Challenge 28: Is Empty
**Description**: Create a function that returns true if an array is empty, false otherwise.
**Hint**: Check if array length is 0.
**Starter Code**:
```javascript
function isEmpty(arr) {
  // your code here
}
```
**Solution**:
```javascript
function isEmpty(arr) {
  return arr.length === 0;
}
```
**Test Code**:
```javascript
return isEmpty([]) === true && isEmpty([1]) === false;
```

---

### Challenge 29: Count Vowels
**Description**: Create a function that counts vowels (a, e, i, o, u) in a string.
**Hint**: Loop through string, check if each character is a vowel.
**Starter Code**:
```javascript
function countVowels(str) {
  // your code here
}
```
**Solution**:
```javascript
function countVowels(str) {
  const vowels = 'aeiouAEIOU';
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (vowels.includes(str[i])) count++;
  }
  return count;
}
```
**Test Code**:
```javascript
return countVowels("hello") === 2;
```

---

### Challenge 30: Sum Evens Only
**Description**: Create a function that sums only the even numbers in an array.
**Hint**: Loop through array, add to sum only if number is even.
**Starter Code**:
```javascript
function sumEvens(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function sumEvens(numbers) {
  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) sum += numbers[i];
  }
  return sum;
}
```
**Test Code**:
```javascript
return sumEvens([1, 2, 3, 4, 5]) === 6;
```

---

## MEDIUM LEVEL (Challenges 31-60)
### Max 5 lines of code

### Challenge 31: Reverse String
**Description**: Create a function that reverses a string.
**Hint**: Loop through string backwards, building a new string.
**Starter Code**:
```javascript
function reverseString(str) {
  // your code here
}
```
**Solution**:
```javascript
function reverseString(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return reversed;
}
```
**Test Code**:
```javascript
return reverseString("hello") === "olleh";
```

---

### Challenge 32: Find Minimum
**Description**: Create a function that finds the smallest number in an array.
**Hint**: Similar to findMax but use < instead of >.
**Starter Code**:
```javascript
function findMin(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function findMin(numbers) {
  let min = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] < min) min = numbers[i];
  }
  return min;
}
```
**Test Code**:
```javascript
return findMin([5, 2, 8, 1, 9]) === 1;
```

---

### Challenge 33: Remove Negatives
**Description**: Create a function that removes all negative numbers from an array.
**Hint**: Create new array, only add numbers >= 0.
**Starter Code**:
```javascript
function removeNegatives(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function removeNegatives(numbers) {
  const positive = [];
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] >= 0) positive.push(numbers[i]);
  }
  return positive;
}
```
**Test Code**:
```javascript
const r = removeNegatives([1, -2, 3, -4]); return r.length === 2;
```

---

### Challenge 34: Get Initials
**Description**: Create a function that returns the initials from a full name (e.g., "John Doe" → "JD").
**Hint**: Split by space, take first letter of each word, and join them.
**Starter Code**:
```javascript
function getInitials(name) {
  // your code here
}
```
**Solution**:
```javascript
function getInitials(name) {
  const words = name.split(' ');
  let initials = '';
  for (let i = 0; i < words.length; i++) {
    initials += words[i][0];
  }
  return initials;
}
```
**Test Code**:
```javascript
return getInitials("John Doe") === "JD" && getInitials("John") === "J";
```

---

### Challenge 35: Count Occurrences
**Description**: Create a function that counts how many times a value appears in an array.
**Hint**: Loop through array, count when element equals the value.
**Starter Code**:
```javascript
function countOccurrences(arr, value) {
  // your code here
}
```
**Solution**:
```javascript
function countOccurrences(arr, value) {
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) count++;
  }
  return count;
}
```
**Test Code**:
```javascript
return countOccurrences([1, 2, 2, 3, 2], 2) === 3;
```

---

### Challenge 36: Double All Numbers
**Description**: Create a function that doubles every number in an array.
**Hint**: Create new array, push each number * 2.
**Starter Code**:
```javascript
function doubleAll(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function doubleAll(numbers) {
  const doubled = [];
  for (let i = 0; i < numbers.length; i++) {
    doubled.push(numbers[i] * 2);
  }
  return doubled;
}
```
**Test Code**:
```javascript
const d = doubleAll([1, 2, 3]); return d[0] === 2 && d[2] === 6;
```

---

### Challenge 37: Filter by Length
**Description**: Create a function that returns only strings longer than n characters.
**Hint**: Loop through strings, add to result if length > n.
**Starter Code**:
```javascript
function filterLong(strings, n) {
  // your code here
}
```
**Solution**:
```javascript
function filterLong(strings, n) {
  const result = [];
  for (let i = 0; i < strings.length; i++) {
    if (strings[i].length > n) result.push(strings[i]);
  }
  return result;
}
```
**Test Code**:
```javascript
const r = filterLong(["hi", "hello", "hey"], 3); return r.length === 1 && r[0] === "hello";
```

---

### Challenge 38: Is Palindrome
**Description**: Create a function that checks if a string is a palindrome (same forwards and backwards).
**Hint**: Compare string with its reversed version.
**Starter Code**:
```javascript
function isPalindrome(str) {
  // your code here
}
```
**Solution**:
```javascript
function isPalindrome(str) {
  let reversed = '';
  for (let i = str.length - 1; i >= 0; i--) {
    reversed += str[i];
  }
  return str === reversed;
}
```
**Test Code**:
```javascript
return isPalindrome("racecar") === true && isPalindrome("hello") === false;
```

---

### Challenge 39: Find Index
**Description**: Create a function that finds the index of a value in an array, or -1 if not found.
**Hint**: Loop through array, return index when found.
**Starter Code**:
```javascript
function findIndex(arr, value) {
  // your code here
}
```
**Solution**:
```javascript
function findIndex(arr, value) {
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === value) return i;
  }
  return -1;
}
```
**Test Code**:
```javascript
return findIndex([1, 2, 3], 2) === 1 && findIndex([1, 2, 3], 5) === -1;
```

---

### Challenge 40: Sum of Digits
**Description**: Create a function that sums all digits in a number (e.g., 123 → 6).
**Hint**: Convert to string, loop through each digit, sum them.
**Starter Code**:
```javascript
function sumDigits(num) {
  // your code here
}
```
**Solution**:
```javascript
function sumDigits(num) {
  const str = num.toString();
  let sum = 0;
  for (let i = 0; i < str.length; i++) {
    sum += parseInt(str[i]);
  }
  return sum;
}
```
**Test Code**:
```javascript
return sumDigits(123) === 6;
```

---

### Challenge 41: Merge Two Arrays
**Description**: Create a function that combines two arrays into one.
**Hint**: Loop through both arrays, adding all elements to a new array.
**Starter Code**:
```javascript
function mergeArrays(arr1, arr2) {
  // your code here
}
```
**Solution**:
```javascript
function mergeArrays(arr1, arr2) {
  const merged = [];
  for (let i = 0; i < arr1.length; i++) merged.push(arr1[i]);
  for (let i = 0; i < arr2.length; i++) merged.push(arr2[i]);
  return merged;
}
```
**Test Code**:
```javascript
const m = mergeArrays([1, 2], [3, 4]); return m.length === 4;
```

---

### Challenge 42: FizzBuzz
**Description**: Return "Fizz" if n is divisible by 3, "Buzz" if by 5, "FizzBuzz" if both, otherwise the number.
**Hint**: Check divisibility by 15 first, then 3, then 5.
**Starter Code**:
```javascript
function fizzBuzz(n) {
  // your code here
}
```
**Solution**:
```javascript
function fizzBuzz(n) {
  if (n % 15 === 0) return "FizzBuzz";
  if (n % 3 === 0) return "Fizz";
  if (n % 5 === 0) return "Buzz";
  return n;
}
```
**Test Code**:
```javascript
return fizzBuzz(15) === "FizzBuzz" && fizzBuzz(9) === "Fizz";
```

---

### Challenge 43: Title Case
**Description**: Create a function that capitalizes the first letter of each word in a string.
**Hint**: Split into words, capitalize each, join back together.
**Starter Code**:
```javascript
function titleCase(str) {
  // your code here
}
```
**Solution**:
```javascript
function titleCase(str) {
  const words = str.split(' ');
  for (let i = 0; i < words.length; i++) {
    words[i] = words[i][0].toUpperCase() + words[i].slice(1);
  }
  return words.join(' ');
}
```
**Test Code**:
```javascript
return titleCase("hello world") === "Hello World";
```

---

### Challenge 44: Remove Duplicates
**Description**: Create a function that removes duplicate values from an array.
**Hint**: Use a new array and only add elements not already in it.
**Starter Code**:
```javascript
function removeDuplicates(arr) {
  // your code here
}
```
**Solution**:
```javascript
function removeDuplicates(arr) {
  const unique = [];
  for (let i = 0; i < arr.length; i++) {
    if (!unique.includes(arr[i])) unique.push(arr[i]);
  }
  return unique;
}
```
**Test Code**:
```javascript
const u = removeDuplicates([1, 2, 2, 3]); return u.length === 3;
```

---

### Challenge 45: Range
**Description**: Create a function that generates an array from start to end (inclusive).
**Hint**: Use a for loop from start to end, pushing each number.
**Starter Code**:
```javascript
function range(start, end) {
  // your code here
}
```
**Solution**:
```javascript
function range(start, end) {
  const arr = [];
  for (let i = start; i <= end; i++) {
    arr.push(i);
  }
  return arr;
}
```
**Test Code**:
```javascript
const r = range(1, 5); return r.length === 5 && r[0] === 1;
```

---

### Challenge 46: Count Words
**Description**: Create a function that counts the number of words in a string.
**Hint**: Split by spaces and return the length.
**Starter Code**:
```javascript
function countWords(str) {
  // your code here
}
```
**Solution**:
```javascript
function countWords(str) {
  return str.split(' ').length;
}
```
**Test Code**:
```javascript
return countWords("hello world") === 2;
```

---

### Challenge 47: Square All
**Description**: Create a function that squares every number in an array.
**Hint**: Loop through and push num * num.
**Starter Code**:
```javascript
function squareAll(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function squareAll(numbers) {
  const squared = [];
  for (let i = 0; i < numbers.length; i++) {
    squared.push(numbers[i] * numbers[i]);
  }
  return squared;
}
```
**Test Code**:
```javascript
const s = squareAll([2, 3, 4]); return s[0] === 4 && s[2] === 16;
```

---

### Challenge 48: Starts With
**Description**: Create a function that checks if a string starts with a given prefix.
**Hint**: Compare the beginning of the string with the prefix.
**Starter Code**:
```javascript
function startsWith(str, prefix) {
  // your code here
}
```
**Solution**:
```javascript
function startsWith(str, prefix) {
  return str.slice(0, prefix.length) === prefix;
}
```
**Test Code**:
```javascript
return startsWith("hello", "hel") === true && startsWith("hello", "wor") === false;
```

---

### Challenge 49: Default Value
**Description**: Create a function that returns the value if not undefined, otherwise returns "none".
**Hint**: Use strict equality (=== undefined) to check.
**Starter Code**:
```javascript
function getOrDefault(val) {
  // your code here
}
```
**Solution**:
```javascript
function getOrDefault(val) {
  if (val !== undefined) return val;
  return "none";
}
```
**Test Code**:
```javascript
return getOrDefault(undefined) === "none" && getOrDefault(0) === 0;
```

---

### Challenge 50: Factorial
**Description**: Create a function that calculates factorial of n (n! = n × (n-1) × ... × 1).
**Hint**: Start with result = 1, multiply by each number from n down to 1.
**Starter Code**:
```javascript
function factorial(n) {
  // your code here
}
```
**Solution**:
```javascript
function factorial(n) {
  let result = 1;
  for (let i = n; i > 0; i--) {
    result *= i;
  }
  return result;
}
```
**Test Code**:
```javascript
return factorial(5) === 120;
```

---

### Challenge 51: All Positive
**Description**: Create a function that returns true if all numbers in array are positive.
**Hint**: Loop through, return false if any number <= 0.
**Starter Code**:
```javascript
function allPositive(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function allPositive(numbers) {
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] <= 0) return false;
  }
  return true;
}
```
**Test Code**:
```javascript
return allPositive([1, 2, 3]) === true && allPositive([1, -2, 3]) === false;
```

---

### Challenge 52: Ends With
**Description**: Create a function that checks if a string ends with a given suffix.
**Hint**: Compare the end of the string with the suffix.
**Starter Code**:
```javascript
function endsWith(str, suffix) {
  // your code here
}
```
**Solution**:
```javascript
function endsWith(str, suffix) {
  return str.slice(-suffix.length) === suffix;
}
```
**Test Code**:
```javascript
return endsWith("hello", "lo") === true && endsWith("hello", "he") === false;
```

---

### Challenge 53: Every Nth
**Description**: Create a function that returns every nth element from an array.
**Hint**: Loop with step size n (i += n).
**Starter Code**:
```javascript
function everyNth(arr, n) {
  // your code here
}
```
**Solution**:
```javascript
function everyNth(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i += n) {
    result.push(arr[i]);
  }
  return result;
}
```
**Test Code**:
```javascript
const r = everyNth([1, 2, 3, 4, 5, 6], 2); return r.length === 3;
```

---

### Challenge 54: Is Sorted
**Description**: Create a function that checks if an array is sorted in ascending order.
**Hint**: Compare each element with the next one.
**Starter Code**:
```javascript
function isSorted(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function isSorted(numbers) {
  for (let i = 0; i < numbers.length - 1; i++) {
    if (numbers[i] > numbers[i + 1]) return false;
  }
  return true;
}
```
**Test Code**:
```javascript
return isSorted([1, 2, 3]) === true && isSorted([1, 3, 2]) === false;
```

---

### Challenge 55: Unique Characters
**Description**: Create a function that checks if a string has all unique characters.
**Hint**: Loop through string, check if current char appears again later.
**Starter Code**:
```javascript
function hasUniqueChars(str) {
  // your code here
}
```
**Solution**:
```javascript
function hasUniqueChars(str) {
  for (let i = 0; i < str.length; i++) {
    if (str.indexOf(str[i], i + 1) !== -1) return false;
  }
  return true;
}
```
**Test Code**:
```javascript
return hasUniqueChars("abc") === true && hasUniqueChars("aab") === false;
```

---

### Challenge 56: Repeat Elements
**Description**: Create a function that repeats each element in an array n times.
**Hint**: Use nested loops - outer for each element, inner to repeat it.
**Starter Code**:
```javascript
function repeatElements(arr, n) {
  // your code here
}
```
**Solution**:
```javascript
function repeatElements(arr, n) {
  const result = [];
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < n; j++) {
      result.push(arr[i]);
    }
  }
  return result;
}
```
**Test Code**:
```javascript
const r = repeatElements([1, 2], 2); return r.length === 4;
```

---

### Challenge 57: Chunk Array
**Description**: Create a function that splits an array into chunks of size n.
**Hint**: Use a loop with step size n, slice arrays from i to i+n.
**Starter Code**:
```javascript
function chunk(arr, n) {
  // your code here
}
```
**Solution**:
```javascript
function chunk(arr, n) {
  const chunks = [];
  for (let i = 0; i < arr.length; i += n) {
    chunks.push(arr.slice(i, i + n));
  }
  return chunks;
}
```
**Test Code**:
```javascript
const c = chunk([1, 2, 3, 4, 5], 2); return c.length === 3;
```

---

### Challenge 58: Most Frequent
**Description**: Create a function that finds the most frequently occurring element in an array.
**Hint**: For each unique element, count how many times it appears, track the maximum.
**Starter Code**:
```javascript
function mostFrequent(arr) {
  // your code here
}
```
**Solution**:
```javascript
function mostFrequent(arr) {
  let maxCount = 0;
  let mostFreq = arr[0];
  for (let i = 0; i < arr.length; i++) {
    let count = 0;
    for (let j = 0; j < arr.length; j++) {
      if (arr[j] === arr[i]) count++;
    }
    if (count > maxCount) {
      maxCount = count;
      mostFreq = arr[i];
    }
  }
  return mostFreq;
}
```
**Test Code**:
```javascript
return mostFrequent([1, 2, 2, 3, 2]) === 2;
```

---

### Challenge 59: Caesar Shift
**Description**: Create a function that shifts each letter in a string by 1 position (a→b, b→c, etc).
**Hint**: Get char code, add 1, convert back to character.
**Starter Code**:
```javascript
function caesarShift(str) {
  // your code here
}
```
**Solution**:
```javascript
function caesarShift(str) {
  let result = '';
  for (let i = 0; i < str.length; i++) {
    result += String.fromCharCode(str.charCodeAt(i) + 1);
  }
  return result;
}
```
**Test Code**:
```javascript
return caesarShift("abc") === "bcd";
```

---

### Challenge 60: Intersection
**Description**: Create a function that finds common elements between two arrays.
**Hint**: Loop through first array, check if each element is in second array.
**Starter Code**:
```javascript
function intersection(arr1, arr2) {
  // your code here
}
```
**Solution**:
```javascript
function intersection(arr1, arr2) {
  const common = [];
  for (let i = 0; i < arr1.length; i++) {
    if (arr2.includes(arr1[i]) && !common.includes(arr1[i])) {
      common.push(arr1[i]);
    }
  }
  return common;
}
```
**Test Code**:
```javascript
const i = intersection([1, 2, 3], [2, 3, 4]); return i.length === 2;
```

---

## HARD LEVEL (Challenges 61-90)
### Max 7-8 lines of code

### Challenge 61: Flatten Array
**Description**: Create a function that flattens a nested array one level deep.
**Hint**: Loop through array, check if element is array, if so add its elements.
**Starter Code**:
```javascript
function flatten(arr) {
  // your code here
}
```
**Solution**:
```javascript
function flatten(arr) {
  const flat = [];
  for (let i = 0; i < arr.length; i++) {
    if (Array.isArray(arr[i])) {
      for (let j = 0; j < arr[i].length; j++) flat.push(arr[i][j]);
    } else {
      flat.push(arr[i]);
    }
  }
  return flat;
}
```
**Test Code**:
```javascript
const f = flatten([1, [2, 3], 4]); return f.length === 4;
```

---

### Challenge 62: Two Sum
**Description**: Create a function that finds two numbers in an array that add up to target and returns their indices.
**Hint**: Use nested loops to check all pairs.
**Starter Code**:
```javascript
function twoSum(nums, target) {
  // your code here
}
```
**Solution**:
```javascript
function twoSum(nums, target) {
  for (let i = 0; i < nums.length; i++) {
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[i] + nums[j] === target) {
        return [i, j];
      }
    }
  }
  return [];
}
```
**Test Code**:
```javascript
const t = twoSum([2, 7, 11, 15], 9); return t[0] === 0 && t[1] === 1;
```

---

### Challenge 63: Rotate Array
**Description**: Create a function that rotates an array to the right by k positions.
**Hint**: Take last k elements, put them at the beginning. Handle empty arrays.
**Starter Code**:
```javascript
function rotate(arr, k) {
  // your code here
}
```
**Solution**:
```javascript
function rotate(arr, k) {
  if (arr.length === 0) return [];
  k = k % arr.length;
  const rotated = [];
  for (let i = arr.length - k; i < arr.length; i++) rotated.push(arr[i]);
  for (let i = 0; i < arr.length - k; i++) rotated.push(arr[i]);
  return rotated;
}
```
**Test Code**:
```javascript
const r = rotate([1, 2, 3, 4, 5], 2); return r[0] === 4 && rotate([]).length === 0;
```

---

### Challenge 64: Prime Check
**Description**: Create a function that checks if a number is prime.
**Hint**: Check if n is divisible by any number from 2 to sqrt(n).
**Starter Code**:
```javascript
function isPrime(n) {
  // your code here
}
```
**Solution**:
```javascript
function isPrime(n) {
  if (n < 2) return false;
  for (let i = 2; i <= Math.sqrt(n); i++) {
    if (n % i === 0) return false;
  }
  return true;
}
```
**Test Code**:
```javascript
return isPrime(7) === true && isPrime(10) === false;
```

---

### Challenge 65: Fibonacci
**Description**: Create a function that generates the first n Fibonacci numbers.
**Hint**: Start with [0, 1], add sum of last two numbers.
**Starter Code**:
```javascript
function fibonacci(n) {
  // your code here
}
```
**Solution**:
```javascript
function fibonacci(n) {
  if (n === 0) return [];
  if (n === 1) return [0];
  const fib = [0, 1];
  for (let i = 2; i < n; i++) {
    fib.push(fib[i - 1] + fib[i - 2]);
  }
  return fib;
}
```
**Test Code**:
```javascript
const f = fibonacci(6); return f[5] === 5;
```

---

### Challenge 66: Longest Word
**Description**: Create a function that finds the longest word in a sentence.
**Hint**: Split into words, loop to find the longest one.
**Starter Code**:
```javascript
function longestWord(sentence) {
  // your code here
}
```
**Solution**:
```javascript
function longestWord(sentence) {
  const words = sentence.split(' ');
  let longest = words[0];
  for (let i = 1; i < words.length; i++) {
    if (words[i].length > longest.length) longest = words[i];
  }
  return longest;
}
```
**Test Code**:
```javascript
return longestWord("I love Christmas") === "Christmas";
```

---

### Challenge 67: Bubble Sort
**Description**: Create a function that sorts an array using bubble sort.
**Hint**: Use nested loops, swap adjacent elements if in wrong order.
**Starter Code**:
```javascript
function bubbleSort(arr) {
  // your code here
}
```
**Solution**:
```javascript
function bubbleSort(arr) {
  const sorted = [...arr];
  for (let i = 0; i < sorted.length; i++) {
    for (let j = 0; j < sorted.length - i - 1; j++) {
      if (sorted[j] > sorted[j + 1]) {
        [sorted[j], sorted[j + 1]] = [sorted[j + 1], sorted[j]];
      }
    }
  }
  return sorted;
}
```
**Test Code**:
```javascript
const s = bubbleSort([3, 1, 4, 2]); return s[0] === 1 && s[3] === 4;
```

---

### Challenge 68: Valid Parentheses
**Description**: Create a function that checks if parentheses in a string are balanced.
**Hint**: Count opening/closing, ensure count never goes negative and ends at 0.
**Starter Code**:
```javascript
function validParens(str) {
  // your code here
}
```
**Solution**:
```javascript
function validParens(str) {
  let count = 0;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') count++;
    if (str[i] === ')') count--;
    if (count < 0) return false;
  }
  return count === 0;
}
```
**Test Code**:
```javascript
return validParens("()()") === true && validParens("(()") === false;
```

---

### Challenge 69: Anagram Check
**Description**: Create a function that checks if two strings are anagrams.
**Hint**: Sort both strings and compare them.
**Starter Code**:
```javascript
function areAnagrams(str1, str2) {
  // your code here
}
```
**Solution**:
```javascript
function areAnagrams(str1, str2) {
  if (str1.length !== str2.length) return false;
  const sorted1 = str1.split('').sort().join('');
  const sorted2 = str2.split('').sort().join('');
  return sorted1 === sorted2;
}
```
**Test Code**:
```javascript
return areAnagrams("listen", "silent") === true;
```

---

### Challenge 70: Missing Number
**Description**: Create a function that finds the missing number in an array from 0 to n.
**Hint**: Calculate expected sum, subtract actual sum.
**Starter Code**:
```javascript
function findMissing(arr) {
  // your code here
}
```
**Solution**:
```javascript
function findMissing(arr) {
  const n = arr.length;
  const expectedSum = (n * (n + 1)) / 2;
  let actualSum = 0;
  for (let i = 0; i < arr.length; i++) actualSum += arr[i];
  return expectedSum - actualSum;
}
```
**Test Code**:
```javascript
return findMissing([0, 1, 3, 4]) === 2;
```

---

### Challenge 71: Matrix Sum
**Description**: Create a function that sums all numbers in a 2D array (matrix).
**Hint**: Use nested loops to go through rows and columns.
**Starter Code**:
```javascript
function matrixSum(matrix) {
  // your code here
}
```
**Solution**:
```javascript
function matrixSum(matrix) {
  let sum = 0;
  for (let i = 0; i < matrix.length; i++) {
    for (let j = 0; j < matrix[i].length; j++) {
      sum += matrix[i][j];
    }
  }
  return sum;
}
```
**Test Code**:
```javascript
return matrixSum([[1, 2], [3, 4]]) === 10;
```

---

### Challenge 72: Group Evens and Odds
**Description**: Create a function that returns an object with 'evens' and 'odds' arrays.
**Hint**: Loop through array, push to appropriate array based on % 2.
**Starter Code**:
```javascript
function groupEvenOdd(numbers) {
  // your code here
}
```
**Solution**:
```javascript
function groupEvenOdd(numbers) {
  const result = { evens: [], odds: [] };
  for (let i = 0; i < numbers.length; i++) {
    if (numbers[i] % 2 === 0) {
      result.evens.push(numbers[i]);
    } else {
      result.odds.push(numbers[i]);
    }
  }
  return result;
}
```
**Test Code**:
```javascript
const r = groupEvenOdd([1, 2, 3, 4]); return r.evens.length === 2;
```

---

### Challenge 73: Second Largest
**Description**: Create a function that finds the second largest number in an array.
**Hint**: Track both largest and second largest while looping. Return null if less than 2 distinct numbers.
**Starter Code**:
```javascript
function secondLargest(nums) {
  // your code here
}
```
**Solution**:
```javascript
function secondLargest(nums) {
  let max = -Infinity, second = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max) {
      second = max;
      max = nums[i];
    } else if (nums[i] > second && nums[i] < max) {
      second = nums[i];
    }
  }
  return second === -Infinity ? null : second;
}
```
**Test Code**:
```javascript
return secondLargest([1, 5, 3, 9, 2]) === 5 && secondLargest([5]) === null;
```

---

### Challenge 74: Compress String
**Description**: Create a function that compresses strings (e.g., "aaabbb" → "a3b3").
**Hint**: Count consecutive characters, build result string.
**Starter Code**:
```javascript
function compress(str) {
  // your code here
}
```
**Solution**:
```javascript
function compress(str) {
  let result = '';
  let count = 1;
  for (let i = 0; i < str.length; i++) {
    if (str[i] === str[i + 1]) {
      count++;
    } else {
      result += str[i] + count;
      count = 1;
    }
  }
  return result;
}
```
**Test Code**:
```javascript
return compress("aaabbb") === "a3b3";
```

---

### Challenge 75: Median
**Description**: Create a function that finds the median of an array of numbers.
**Hint**: Sort array, return middle element (or average of two middle).
**Starter Code**:
```javascript
function median(nums) {
  // your code here
}
```
**Solution**:
```javascript
function median(nums) {
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  if (sorted.length % 2 === 0) {
    return (sorted[mid - 1] + sorted[mid]) / 2;
  }
  return sorted[mid];
}
```
**Test Code**:
```javascript
return median([1, 2, 3, 4, 5]) === 3;
```

---

### Challenge 76: Transpose Matrix
**Description**: Create a function that transposes a matrix (swap rows and columns).
**Hint**: Create new matrix where result[j][i] = matrix[i][j].
**Starter Code**:
```javascript
function transpose(matrix) {
  // your code here
}
```
**Solution**:
```javascript
function transpose(matrix) {
  const result = [];
  for (let j = 0; j < matrix[0].length; j++) {
    result[j] = [];
    for (let i = 0; i < matrix.length; i++) {
      result[j][i] = matrix[i][j];
    }
  }
  return result;
}
```
**Test Code**:
```javascript
const t = transpose([[1, 2], [3, 4]]); return t[0][1] === 3;
```

---

### Challenge 77: Merge Sorted Arrays
**Description**: Create a function that merges two sorted arrays into one sorted array.
**Hint**: Use two pointers, compare and add smaller element.
**Starter Code**:
```javascript
function mergeSorted(arr1, arr2) {
  // your code here
}
```
**Solution**:
```javascript
function mergeSorted(arr1, arr2) {
  const merged = [];
  let i = 0, j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) merged.push(arr1[i++]);
    else merged.push(arr2[j++]);
  }
  while (i < arr1.length) merged.push(arr1[i++]);
  while (j < arr2.length) merged.push(arr2[j++]);
  return merged;
}
```
**Test Code**:
```javascript
const m = mergeSorted([1, 3], [2, 4]); return m[1] === 2;
```

---

### Challenge 78: Binary Search
**Description**: Create a function that implements binary search on a sorted array.
**Hint**: Use left/right pointers, calculate mid, adjust based on comparison.
**Starter Code**:
```javascript
function binarySearch(arr, target) {
  // your code here
}
```
**Solution**:
```javascript
function binarySearch(arr, target) {
  let left = 0, right = arr.length - 1;
  while (left <= right) {
    const mid = Math.floor((left + right) / 2);
    if (arr[mid] === target) return mid;
    if (arr[mid] < target) left = mid + 1;
    else right = mid - 1;
  }
  return -1;
}
```
**Test Code**:
```javascript
return binarySearch([1, 2, 3, 4, 5], 3) === 2;
```

---

### Challenge 79: Pascal's Triangle Row
**Description**: Create a function that generates the nth row of Pascal's triangle.
**Hint**: Each element is sum of two elements above it from previous row.
**Starter Code**:
```javascript
function pascalRow(n) {
  // your code here
}
```
**Solution**:
```javascript
function pascalRow(n) {
  let row = [1];
  for (let i = 0; i < n; i++) {
    const newRow = [1];
    for (let j = 0; j < row.length - 1; j++) {
      newRow.push(row[j] + row[j + 1]);
    }
    newRow.push(1);
    row = newRow;
  }
  return row;
}
```
**Test Code**:
```javascript
const p = pascalRow(2); return p[1] === 2;
```

---

### Challenge 80: Diagonal Sum
**Description**: Create a function that sums both diagonals of a square matrix.
**Hint**: Loop once, add matrix[i][i] and matrix[i][n-1-i].
**Starter Code**:
```javascript
function diagonalSum(matrix) {
  // your code here
}
```
**Solution**:
```javascript
function diagonalSum(matrix) {
  let sum = 0;
  const n = matrix.length;
  for (let i = 0; i < n; i++) {
    sum += matrix[i][i];
    if (i !== n - 1 - i) sum += matrix[i][n - 1 - i];
  }
  return sum;
}
```
**Test Code**:
```javascript
return diagonalSum([[1, 2], [3, 4]]) === 10;
```

---

### Challenge 81: GCD (Greatest Common Divisor)
**Description**: Create a function that finds the GCD of two numbers using Euclidean algorithm.
**Hint**: Keep dividing larger by smaller until remainder is 0.
**Starter Code**:
```javascript
function gcd(a, b) {
  // your code here
}
```
**Solution**:
```javascript
function gcd(a, b) {
  while (b !== 0) {
    const temp = b;
    b = a % b;
    a = temp;
  }
  return a;
}
```
**Test Code**:
```javascript
return gcd(48, 18) === 6;
```

---

### Challenge 82: Reverse Words
**Description**: Create a function that reverses the order of words in a sentence.
**Hint**: Split into words, reverse the array, join back.
**Starter Code**:
```javascript
function reverseWords(sentence) {
  // your code here
}
```
**Solution**:
```javascript
function reverseWords(sentence) {
  const words = sentence.split(' ');
  const reversed = [];
  for (let i = words.length - 1; i >= 0; i--) {
    reversed.push(words[i]);
  }
  return reversed.join(' ');
}
```
**Test Code**:
```javascript
return reverseWords("hello world") === "world hello";
```

---

### Challenge 83: Count Islands
**Description**: Create a function that counts groups of adjacent 1s in a 2D grid (0s are water).
**Hint**: Loop through grid, when you find a 1, mark all connected 1s as visited.
**Starter Code**:
```javascript
function countIslands(grid) {
  // your code here
}
```
**Solution**:
```javascript
function countIslands(grid) {
  let count = 0;
  const mark = (i, j) => {
    if (i < 0 || i >= grid.length || j < 0 || j >= grid[0].length) return;
    if (grid[i][j] === 0) return;
    grid[i][j] = 0;
    mark(i+1, j); mark(i-1, j); mark(i, j+1); mark(i, j-1);
  };
  for (let i = 0; i < grid.length; i++) {
    for (let j = 0; j < grid[0].length; j++) {
      if (grid[i][j] === 1) { mark(i, j); count++; }
    }
  }
  return count;
}
```
**Test Code**:
```javascript
return countIslands([[1,1,0],[0,1,0],[0,0,1]]) === 2;
```

---

### Challenge 84: LCM (Least Common Multiple)
**Description**: Create a function that finds the LCM of two numbers.
**Hint**: LCM = (a * b) / GCD(a, b).
**Starter Code**:
```javascript
function lcm(a, b) {
  // your code here
}
```
**Solution**:
```javascript
function lcm(a, b) {
  const findGCD = (x, y) => {
    while (y !== 0) {
      const temp = y;
      y = x % y;
      x = temp;
    }
    return x;
  };
  return (a * b) / findGCD(a, b);
}
```
**Test Code**:
```javascript
return lcm(12, 18) === 36;
```

---

### Challenge 85: Longest Increasing Subsequence Length
**Description**: Create a function that finds the length of longest increasing subsequence.
**Hint**: For each position, count how many numbers can extend from it.
**Starter Code**:
```javascript
function longestIncreasing(nums) {
  // your code here
}
```
**Solution**:
```javascript
function longestIncreasing(nums) {
  if (nums.length === 0) return 0;
  let maxLen = 1;
  for (let i = 0; i < nums.length; i++) {
    let len = 1;
    let last = nums[i];
    for (let j = i + 1; j < nums.length; j++) {
      if (nums[j] > last) { len++; last = nums[j]; }
    }
    maxLen = Math.max(maxLen, len);
  }
  return maxLen;
}
```
**Test Code**:
```javascript
return longestIncreasing([10, 9, 2, 5, 3, 7, 101]) === 4;
```

---

### Challenge 86: Power of Number
**Description**: Create a function that calculates base raised to exponent (don't use **).
**Hint**: Multiply base by itself exponent times.
**Starter Code**:
```javascript
function power(base, exp) {
  // your code here
}
```
**Solution**:
```javascript
function power(base, exp) {
  let result = 1;
  for (let i = 0; i < exp; i++) {
    result *= base;
  }
  return result;
}
```
**Test Code**:
```javascript
return power(2, 3) === 8;
```

---

### Challenge 87: Run Length Decode
**Description**: Create a function that decodes run-length encoded strings (e.g., "a3b2" → "aaabb").
**Hint**: Loop through pairs, repeat character by the number.
**Starter Code**:
```javascript
function decode(str) {
  // your code here
}
```
**Solution**:
```javascript
function decode(str) {
  let result = '';
  for (let i = 0; i < str.length; i += 2) {
    const char = str[i];
    const count = parseInt(str[i + 1]);
    for (let j = 0; j < count; j++) {
      result += char;
    }
  }
  return result;
}
```
**Test Code**:
```javascript
return decode("a3b2") === "aaabb";
```

---

### Challenge 88: Max Product of Two
**Description**: Create a function that finds the maximum product of any two numbers in an array.
**Hint**: Find the two largest numbers and multiply them.
**Starter Code**:
```javascript
function maxProduct(nums) {
  // your code here
}
```
**Solution**:
```javascript
function maxProduct(nums) {
  let max1 = -Infinity, max2 = -Infinity;
  for (let i = 0; i < nums.length; i++) {
    if (nums[i] > max1) {
      max2 = max1;
      max1 = nums[i];
    } else if (nums[i] > max2) {
      max2 = nums[i];
    }
  }
  return max1 * max2;
}
```
**Test Code**:
```javascript
return maxProduct([3, 4, 5, 2]) === 20;
```

---

### Challenge 89: Snake to Camel Case
**Description**: Create a function that converts snake_case to camelCase.
**Hint**: Split by underscore, capitalize first letter of each word except first.
**Starter Code**:
```javascript
function snakeToCamel(str) {
  // your code here
}
```
**Solution**:
```javascript
function snakeToCamel(str) {
  const words = str.split('_');
  let result = words[0];
  for (let i = 1; i < words.length; i++) {
    result += words[i][0].toUpperCase() + words[i].slice(1);
  }
  return result;
}
```
**Test Code**:
```javascript
return snakeToCamel("hello_world") === "helloWorld";
```

---

### Challenge 90: Sliding Window Maximum
**Description**: Create a function that finds the maximum in each sliding window of size k.
**Hint**: For each window position, find max of elements in that window.
**Starter Code**:
```javascript
function windowMax(nums, k) {
  // your code here
}
```
**Solution**:
```javascript
function windowMax(nums, k) {
  const result = [];
  for (let i = 0; i <= nums.length - k; i++) {
    let max = nums[i];
    for (let j = i; j < i + k; j++) {
      if (nums[j] > max) max = nums[j];
    }
    result.push(max);
  }
  return result;
}
```
**Test Code**:
```javascript
const w = windowMax([1, 3, 5, 2, 4], 3); return w[0] === 5;
```

---

## Summary

**Line Count Guidelines:**
- **Easy (1-30)**: 1-2 lines → gradually → 3-4 lines max
- **Medium (31-60)**: 3-5 lines max
- **Hard (61-90)**: 5-8 lines max

**Progressive Learning:**
- Simple returns and operations
- Basic conditionals and loops
- Array/string manipulation
- Nested loops and complex logic
- Algorithms and problem-solving

All challenges are suitable for total beginners, building skills progressively! 🎄
