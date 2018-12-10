// Type JavaScript here and click "Run Code" or press Ctrl + s
console.log('Hello, world!');


// Challenge 1
function addTwo(num) {
  return num + 2;
}

// To check if you've completed it, uncomment these console.logs!
console.log(addTwo(3));
console.log(addTwo(10));


// Challenge 2
function addS(word) {
  return word + "s";
}

// uncomment these to check your work
console.log(addS('pizza'));
console.log(addS('bagel'));


// Challenge 3
function map(array, callback) {
  return array.map( val => callback(val));
}

console.log(map([1, 2, 3], addTwo));


// Challenge 4
function forEach(array, callback) {
  array.forEach(val => console.log(callback(val)));
}

// see for yourself if your forEach works!


//--------------------------------------------------
// Extension
//--------------------------------------------------

//Extension 1
function mapWith(array, callback) {
  var newArr = [];

  array.forEach( val => newArr = callback(val));

  return newArr;
}

//Extension 2
function reduce(array, callback, initialValue) {
  array.forEach( val => initialValue = callback(initialValue, val));
  return initialValue;
}

function add(a, b) {
   return a + b;
}

//Extension 3
function intersection() {
  let args = [...arguments];  

 return args.reduce( (acc, curr) => {
    acc = curr.filter( value => acc.includes(value));
    return acc;
  }, args[0]);   // leave second parameter empty
}

// console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
// should log: [5, 15]

//Extension 4
function union() {
  let args = [...arguments];

  return args.reduce( (acc, curr) => {
    acc.push(curr.filter( val => !acc.includes(val) ));
    return acc.flat();
  },);
}

// console.log(union([5, 10, 15], [15, 88, 1, 5, 7], [100, 15, 10, 1, 5]));
// should log: [5, 10, 15, 88, 1, 7, 100]

//Extension 5

function objOfMatches(array1, array2, callback) {
  let newObj = {};

  let origObj =  array1.reduce( (acc, cur) => {
    array2.forEach( val => {
      if( val.toLowerCase() == cur.toLowerCase() ) {
        acc[cur] = val;
      }
    });

    return acc;
  }, {});

  for( item in origObj) {
    if ( origObj[item] == callback(origObj[item]) ) {
      newObj[item] = origObj[item];
    }
  }

  return newObj;
}

// console.log(objOfMatches(['hi', 'howdy', 'bye', 'later', 'hello'], ['HI', 'Howdy', 'BYE', 'LATER', 'hello'], function(str) { return str.toUpperCase(); }));
// should log: { hi: 'HI', bye: 'BYE', later: 'LATER' }

//Extension 6

function multiMap(arrVals, arrCallbacks) {
  
  return arrCallbacks.reduce( (acc, cur) => {
    
    arrVals.forEach( val => {
      acc[val] = arrVals.map(cur);
    });
      
    return acc;
  }, {});
  
}

// console.log(multiMap(['catfood', 'glue', 'beer'], [function(str) { return str.toUpperCase(); }, function(str) { return str[0].toUpperCase() + str.slice(1).toLowerCase(); }, function(str) { return str + str; }]));
// should log: { catfood: ['CATFOOD', 'Catfood', 'catfoodcatfood'], glue: ['GLUE', 'Glue', 'glueglue'], beer: ['BEER', 'Beer', 'beerbeer'] }
