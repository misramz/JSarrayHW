


var itemPrices = items.map( function (item) {
  return item.price;
});

// 2. Get the sum of all Prices
var sum = function (a, b) {
  return a + b;
}
var itemPriceSum = itemPrices.reduce(sum);
var avgPrice = itemPriceSum / items.length;

avgPrice = avgPrice.toFixed(2);
var answer1 = '<p>The average price is $' + avgPrice + '.</p>';

// 5. print answer on page
var answer1Area = document.querySelector('#a1');
answer1Area.innerHTML = answer1;


// Number 2 ---------------------------------------------

var title = items.filter(function(item) {
  if (item.price >= 14.00 && item.price <= 18.00) {
    return item.price
  }

});

var answer2 = document.querySelector('#a2');


title.forEach(function(singleitem){

var area = document.createElement('p');
var result = document.createTextNode(singleitem.title);

area.appendChild(result);

answer2.appendChild(area);
});

// ----------------------------------- 3

var amount = items.filter(function(items) {
  return items.currency_code === 'GBP';
});

amount.forEach (function (x){
  var answer3 = x.title + ' cost £18.';

  var area = document.querySelector('#a3');
  area.innerHTML = answer3;
});

// ---------------------------------- 4

var wood = items.filter(function (item) {
  return item.materials.indexOf('wood') >= 0;
});

var area = document.querySelector('#a4');

wood.forEach( function (item) {

  var answer = document.createElement('p');

  answer.innerHTML = item.title + ' is made of wood';
  area.appendChild(answer);
});

// -------------------------- 5

var materialSearch = items.filter(function(item){
  return item.materials.length >= 8;
});


materialSearch.forEach (function(item) {

  var answer5 = document.querySelector('#a5');

  var para = document.createElement('p');

  para.innerHTML = item.title + ' has ' + item.materials.length + ' materials:';

  answer5.appendChild(para);

  var ul = document.createElement('ul');

  item.materials.forEach(function(material){

  var li = document.createElement('li');

  li.innerHTML= material;

  ul.appendChild(li)
  });
  answer5.appendChild(ul);
});


// -------------------------- 6

var madeitems = items.filter(function (items) {
  return items.who_made === 'i_did';

});

let answer6 = madeitems.length + 'were made by their sellers';

var area = document.querySelector('#a6');
area.innerHTML = answer6;
