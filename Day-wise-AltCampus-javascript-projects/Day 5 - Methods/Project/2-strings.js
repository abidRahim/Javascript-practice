// Write a JavaScript function to chop a string into chunks of a given length.
// Input ( String, Number) -> ('Hello World!', 2)
// Output ['He', 'll', 'o ', 'Wo', 'rl', 'd!']


function chopper(str, length) {
  let newArr = [];

  for(let i = 0; i < str.length; i + length){
    str.substr(i, length);
  }

  return newArr;
}

//Write a JavaScript function to count the occurrence of a substring in a string.
// Input (String, String) -> ('The world of the dogs', 'the')
// Output (Number) -> 2

function countOcc(str, sub) {
  return str.toLowerCase().split(" ").filter( v => (v === sub)).length;
}

//  Write a JavaScript function to strip leading and trailing spaces from a string.
// Input (String) -> ('Hello World   ')
// Output String -> "Hello World"

function strip(str) {
  return str.trim();
}

// Write a JavaScript function to truncate a string to a certain number of words.
// Input (String, Number) -> ('The quick brown fox jumps over the lazy dog', 4)
// Output ( String ) -> "The quick brown fox"

  function truncate(str, num) {
    let arr = [];
    let disp = str.split(" ").forEach( (element,ind) => {
      if(ind > num -1) {
        return;
      } else {
        arr.push(element);        
      }
      return arr;
    }); 
    return arr.join(" ");
  }

// Write a JavaScript function to alphabetize a given string.(A -z)
// Input (String) -> 'United States'
// Output 'SUadeeinsttt'

function alphabetize(str) {

  let storeArr = str.split('');
  let storeCode = [];

  for (let i = 0; i < storeArr.length < i++) {   // *** Error with the ( bracket
    storeCode.push( charCodeAt( storeArr.charAt(i) ) );
  }

  console.log(storeCode);

  storeCode.sort().join();
  
}

// Write a JavaScript function to test case insensitive (except special Unicode characters) string comparison.
// Input ( String String) -> ('abcd', 'AbcD')
// Output Boolean -> true
// ('ABCD', 'Abce') -> false

function checkInsensitive(str1, str2) {
  if (str1.toUpperCase() === str2.toUpperCase()) {
    return true;
  } else {
    return false;
  }
}