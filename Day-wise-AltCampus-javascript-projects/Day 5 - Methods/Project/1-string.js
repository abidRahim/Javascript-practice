// Write a JavaScript function to check whether an `input` is a string or not.

function checkString (str) {
  if (typeof(str) === "string") {
    return true;
  } else console.log("Not a String");
 }

// Write a JavaScript function to check whether a string is blank or not.

function checkBlank(str) {
  if ( checkString(str) ) {

    if (str === "") {
      console.log("String is empty");
    }
    else {
      console.log("String not empty");
    }
  }
}

// Write a JavaScript function to split a string and convert it into an array of words.
// Input -> "Hello World In Javascript"
// Output -> ['Hello','World', 'In', 'Javascript']

function split(str) {
  let storeArr = str.split(" ").forEach(element => console.log(element));

  return storeArr;
}

// Write a JavaScript function to extract a specified number of characters from a string.
// Input -> (string, number) -> ('Hello World!', 4)
// Ouptut -> String -> "Hell"

function extract(str, maxLength) {
  if (str.length > maxLength) {
    
    return str.slice(0, maxLength);
  } else { 
    console.log("Sorry, Cut off length exceeds string length");
  }
}


// Write a JavaScript function to convert a Full Name like (Rahul Dravid) -> (Rahul D.)
// Input -> (String)
// Output (String)

function splitName(str) {
  var storeArr = str.split(" ");

  var lastName = storeArr[storeArr.length - 1];
  String(lastName);
  console.log(`${storeArr[0].charAt(0).toUpperCase()} ${lastName[0].toUpperCase() }`);
}

// Write a JavaScript function to hide email addresses to protect from unauthorized user.
// Input -> (String) -> "someone@altcampus.io"
// Output -> (String) -> "som....@altcampus.io"

function hideEmail(str) {
  
  var splitEmail = str.split('@');
  var hideChar = splitEmail[0].slice(3);
  // let hiddenChar = hideChar.forEach( (v) => replace(v,'*'));
  var storeHidden = "";

  for (let i = 0; i < hideChar.length; i++) {
    storeHidden += "*";
  }

  return str.slice(0,3) + storeHidden + "@" + splitEmail[1];
}

// Write a JavaScript function to parameterize a string
// Input -> (String) -> ('The Perks Of Being A Wallflower')
// Output -> (String) -> 'the-perks-of-being-a-wallflower

function parameterize (str) {
  let newStr = str.toLowerCase().split(" ").join("-");

  return newStr;
}

// Write a JavaScript function to capitalize the first letter of every Word of a string.
// Inpput -> (String) -> 'hello Batman from India'
// Output -> (String) -> 'Hello Batman From India'

// *** Doubt ***

// You can use capitalize()

// function capitalize (str) {
//   let newStr = str.split(" ");
//   var storeStr = "";


//   for (let i = 0; i < newStr.length; i++) {
//     firstStr = newStr[i].charAt(0).toUpperCase();
//     storeStr += firstStr + newStr[i].slice(1) + " ";
//   }

//   return storeStr;
// }

function capitalize(str) {
  let newStr = str.split(" ");
  var storeStr = [];

  for (let i = 0; i < newStr.length; i++) {
    firstStr = newStr[i].charAt(0).toUpperCase();
    storeStr[i] = firstStr + newStr[i].slice(1);
  }

  return storeStr.join(" ");
}

// Write a JavaScript function that takes a string which has lower and upper case letters as a parameter and converts upper case letters to lower case, and lower case letters to upper case.
// Input (String) -> 'AaBbcVv'
// Output -> 'aAbBCvV'


function convertCase(str) {

let arrStr = str.split('');

console.log(arrStr);

  for (let i = 0; i < str.length; i++) {

    if (arrStr[i].toUpperCase() === str[i]) {
      arrStr[i] = arrStr[i].toLowerCase();
    } else {
      arrStr[i] = arrStr[i].toUpperCase();
    }

  }

  return arrStr.join("");
}


// Write a JavaScript function to convert a string into camel case.
// Input (String) -> 'Learning about js'
// Output -> 'LearningAboutJs'


function camelCase(str) {
  let newStr = str.split(" ");
  var storeStr = [];

  for (let i = 1; i < newStr.length; i++) {
    let firstStr = newStr[i].charAt(0).toUpperCase();
    storeStr[i] = firstStr + newStr[i].slice(1);
  }

  return newStr[0].toLowerCase() + storeStr.join("");
}

// Write a JavaScript function to uncamelize a string
// Input (String) -> 'LearningAboutJs'
// Output -> 'Learning About Js'

function uncamelize(str) {
  
  let store = str.split('');
  
  let finalArr = [];

  for (let i=0; i < store.length; i++) {

    if (str.charCodeAt(i) >= 65 && str.charCodeAt(i) <= 90) {
      finalArr[i].push(" ".concat(str.charAt(i)));
    } else {
      finalArr[i].push(str.charCodeAt(i));
    }
  }

  return finalArr.join("");
}

// Write a JavaScript function to concatenates a given string n times
// Input (String, number) -> ('Hello!', 4)
// Output -> 'Hello!Hello!Hello!Hello!'

function concatenates(str, times) {
  let newStr = "";

  for (let i = 0; i < times; i++) {
    newStr += str;
  }

  return newStr;
}

// Write a JavaScript function to humanized number
// Input -> (Number) -> 1 or 2
// Output -> (String) -> 1st or 2nd


function humanized(num) {
  
  let numStr = String(num);

  
  
  let slicedStr = numStr.slice(-1);

  switch(slicedStr) {
    case "1":
      return numStr + "st";
      break;
    case "2":
      return numStr + "nd";
      break;
    case "3":
      return numStr + "rd";
      break;
    case "4":
      return numStr + "th";
      break;
    case "5":
      return numStr + "th";
      break;
    case "6":
      return numStr + "th";
      break;
    case "7":
      return numStr + "th";
      break;
    case "8":
      return numStr + "th";
      break;
    case "9":
      return numStr + "th";
      break;
    case "0":
      return numStr + "th";
      break;
  }
}