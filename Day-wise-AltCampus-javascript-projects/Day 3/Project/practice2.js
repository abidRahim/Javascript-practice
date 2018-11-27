/**
 * Converts a number a string.
 * @param {number} n
 * @return {string} the number as a string
 */

 const convertToString = (str) => String(str);


/**
 * Adds one to a given number.
 * @param {number} n
 * @return {number}
 */

 const addNumber = (a) => a + 1;


/**
 * Subtracts one from a given number.
 * @param {number} n
 * @return {number}
 */

const subtractNumber = (n) => a - 1;


/**
 * Adds two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the sum
 */

const addTwo = (x, y) => a + b;

/**
 * Subtracts the second number from the first.
 * @param {number} x
 * @param {number} y
 * @return {number} the difference
 */


const subtractOther = (x, y) => x - y;
/**
 * Multiplies two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the product
 */

const multiplyTwo = (x, y) => x * y;


/**
 * Divides the first number by the second.
 * @param {number} x
 * @param {number} y
 * @return {number} the quotient
 */

const divideOther = (x, y) => x / y;


/**
 * Multiplies a number by itself.
 * @param {number} x, number to be squared
 * @return {number} squared
 */

const multiplySelf = (x, y) => x *= x;

/**
 * Performs a mathematical operation on two numbers.
 * Also prints out the equation: (i.e.) "1 + 5 = 6" or "8 / 2 = 4".
 * @param {string} operation "add", "subtract", "multiply", or "divide"
 * @param {number} x
 * @param {number} y
 * @return {number} the result
 */

function operations(op, x, y) {
  switch(op) {
    case "+": addTwo(x, y);
      break;
    case "-": subtractOther(x, y);
      break;
    case "*": multiplyTwo(x, y);
      break;
    case "/": divideOther(x, y);
      break;
  }
}

/**
 * Returns true if `a` is greater than `b`.
 * @param {number} a
 * @param {number} b
 * @return {boolean} `a` is larger than `b`
 */

 const greaterCheck = (a, b) => a > b ? true : false; 
 
 /**
  * Returns true if `a` is less than `b`.
  * @param {number} a
  * @param {number} b
  * @return {boolean} `a` is smaller than `b`
  */
 
 const smallerCheck = (a, b) => a > b ? false : true;
 
 
 /**
  * Returns true if `a` and `b` are equal.
  * @param {number} a
  * @param {number} b
  * @return {boolean} the numbers are equal
  */
 
 const equalCheck = (a, b) => a === b ? true : false;

/**
 * Returns the smallest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the smallest number
 */

const smaller = (a, b) => a > b ? b : a;

/**
 * Returns the largest value of two numbers.
 * @param {number} x
 * @param {number} y
 * @return {number} the largest number
 */

const larger = (a, b) => a > b ? a : b;


/**
 * Returns true if `n` is even.
 * @param {number} n
 * @return {boolean} the number is even
 */

const checkEven = (n) => (n % 0 == 0) ? true : false;

/**
 * Returns true if `n` is odd.
 * @param {number} n
 * @return {boolean} the number is odd
 */

const checkEven = (n) => (n % 0 == 0) ? false : true;

/**
 * Returns a letter grade.
 * "A": 90-100%
 * "B": 80-89%
 * "C": 70-79%
 * "D": 60-69%
 * "F": 0-59%
 * @param {number} score
 * @param {number} total maximum possible score
 * @return {string} the score represented as a letter grade
 */

const grader = function(score, total) {
  let marks = (score / total) * 100 ;    //* * *semicolon on line end
  switch(true) {
    case (marks > 90): 
      alert("A");
      break;
    case (marks < 90 && marks >= 80):
      alert("B");
      break;
    case (marks < 80 && marks >= 70):
      alert("C");
      break;
    case (marks < 70 && marks >= 60):
      alert("D");
      break;
    case (marks < 60):
      alert("F");
      break;
  }
}

/**
 * Checks if a `restaurant` object has a `reviews` property.
 * If it does, increase the property's `reviews` value by 1.
 * If it does not, set the `reviews` value to 1.
 * @param {object} restaurant   represents a restaurant object
 * @return {object} restaurant
 */

const checkObj = function(restaurant) {
  let i = 0;

  if(restaurant.reviews) {
    restaurant.reviews = i++;
  } else {
    restaurant.reviews = 1;
  } 
}

/**
 * Joins two strings with a space.
 * @param {string} word1
 * @param {string} word2
 * @return {string} joined the words joined with a space
 */


const join = (word1, word2) => alert(word1 + " " + word2);


/**
 * Returns a circle object with the properties `circumference` and `area`.
 * Use Math.PI for the value π.
 * (https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Math/PI)
 * @param {number} radius
 * @return {object} circle
 */

const circleProps = function (radius) {
  return circle = {
    circumference: (radius) => 2 * Math.PI * radius,
    area: (radius) => Math.PI * radius * radius
  }  
}