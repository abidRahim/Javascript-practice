const SPENDING_THRESHOLD = 200;
const TAX_RATE = 0.08;
const PHONE_PRICE = 99.99;
const ACCESSORY_PRICE = 9.99;

var bank_balance = 303.91;
var amount = 0;


// Write a program to calculate the total price of your phone purchase.
// You will keep purchasing phones (hint: loop!) until you run out of bank balance.
// You'll also buy accessories for each phone as long as your purchase amount is below your spending threshold.

const total_price = PHONE_PRICE + ACCESSORY_PRICE;

var total_amount = 0;

while( (total_amount + PHONE_PRICE) < bank_balance ) { //***  space around nested cells

    while( (total_amount + total_price) < SPENDING_THRESHOLD ){ // *** space around nested cells
        total_amount += total_price;
        console.log(`spending threshold: ${total_amount}`);
    }    

  total_amount += PHONE_PRICE;  
  console.log(`Bank account threshold: ${total_amount}`);
}



//After you've calculated your purchase amount, add in the tax, then print out the calculated purchase amount, properly formatted.

total_amount += total_amount*TAX_RATE;
console.log("With Tax: " + total_amount);


//Finally, check the amount against your bank account balance to see if you can afford it or not.

if(total_amount <= bank_balance) {
  console.log("Purchase can be afforded");  
} else {
  console.log("Purchase cannot be afforded");
}

// Write a function called calculateTax which takes an argument 'amount' and calculates the tax you need to pay.

function calculateTax(amount) {
  var total_tax = amount*TAX_RATE;  
  return total_tax;
}

// Write a function named formatAmount which returns you amount in this format '$ 132.45' make the decimal fixed to 2 places.

function formatAmount(total_amount) { 
  console.log( `$ ${total_amount.toFixed(2)}` );
}

// Write a program that prints the numbers from 1 to 100. But for multiples of three print “Fizz” instead of the number and for the multiples of five print “Buzz”. For numbers which are multiples of both three and five print “FizzBuzz”.

function FizzBuzz() {

  for(var i = 1; i <= 100; i++) { 

    if(i%3 == 0) {
      if(i%5 == 0) {
        console.log("FizzBuzz");        
      } else {
        console.log("Fizz");      
      }
    } else if (i%5 == 0) {
      console.log("Buzz");      
    } else {
      console.log(i);      
    }

  } 

}

FizzBuzz();