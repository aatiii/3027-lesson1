// link to fs
var fs = require('fs');

//food
console.log('FOOD:');
fs.readFile('food.txt', 'utf8', function(err, food){
    console.log(food);
});

//drinks
console.log('\nDRINKS:');
fs.readFile('drinks.txt', 'utf8', function(err, drinks){
    console.log(drinks);
});