
// 1. Show me how to calculate the average price of all items.


// To get a sum of all prices, we first need all prices
// This `map` will give us an array of all prices
var allPrices = items.map( function (item) {
  return item.price;
});

// Now that I have all the prices, we can `reduce` them down to
// a single value, which is the sum of all prices
var priceSum = allPrices.reduce(function (prev, curr) {
  return prev + curr;
});

// Once we have the sum, we can divide by the number (length) of
// items we have
var avg = priceSum / items.length;

// Let's now round that to 2 decimals
var final = avg.toFixed(2);

// Finally, lets build our answer string
var answer1 = "The average price is $" + final;

// Find my "answer" area in the DOM
var answer1Area = document.querySelector('#answer1');

// // Put our answer on the page
// answer1Area.innerHTML = answer1;


// 2.

var prices = items.filter( function (item) {
 return item.price > 14 && item.price < 18;
});
console.log(prices);

var titles = something.forEach( function (){
  console.console.log(ti);
})
 //
 // item.price = x > 14, x < 18;



// 3.




// 4.
var woodyItems = items.filter(function(item) {
  return item.materials
});
