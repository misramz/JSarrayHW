var allPrices = items.map( function (item) {
  Return item.price;
});

console.log(allPrices);

function addUpItemsPrices (prev, curr) {
  return prev + curr;
}
