var fruit = ["banana", "apple", "orange", "watermelon"];
var vegetables = ["carrot", "tomato", "pepper", "lettuce"];
vegetables.pop();
 console.log(vegetables);
fruit.pop();
 console.log(fruit);

 var fruit1=fruit.indexOf('orange');
 console.log(fruit1);
 fruit.push(2);
 console.log(fruit);

 console.log(vegetables.length);
 vegetables.push(3);
 console.log(vegetables);

 var food =fruit.concat(vegetables);
 console.log(food);
 food.splice(4);
 console.log(food);
 food.reverse();
 console.log(food);
 console.log(food.join(" "));