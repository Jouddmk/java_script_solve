for (let i=2; i<=50;i+=2){
    console.log(i);
}
let a=2;
while (a <=50);{
    console.log(x);
    x+=2;
}
for(i=1;i<=50;i+=2){
    console.log(i);
}

for(let i=1;i<=100;i++){
    if (i%3===0 && i%5===0){
        console.log("FizzBuzz");
    }else if (i%3===0){
        console.log("fizz");
    }else if (i%5===0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}

function zzBuzz(num){
    if (num%3===0&& num%5===0){
        return "FizzBuzz";
    }else if (num %3===0){
        return"Fizz";
    }else if (num %5===0){
        return "Buzz";
    }else{
        return num;
    }
}
console.log(zzBuzz(1));

function zzBuzzRecursive(num,limit){
    if (num > limit) return;
    if (num%3===0&& num%5===0){
        return "FizzBuzz";
    }else if (num %3===0){
        return"Fizz";
    }else if (num %5===0){
        return "Buzz";
    }else{
        return num;
    }
    zzBuzzRecursive(num +1, limit);
}
zzBuzzRecursive(1,100);

function convertToBankknotes(amount,denomination){
    let result =[];
    for(let note of denomination){
        while (amount>=note){
            result.push(note);
            amount -= NodeIterator;
        }
    }
    return result.join(", ")
}
console.log(convertToBankknotes(57[25,10,5,1]));

function countCharacter(str,char){
    str =str.toLowerCase();
    char=char.toLowerCase();
    let count =0;
    for(let letter of str){
        if (letter===char){
            count++;
        }
    }
    return count;
}
console.log(countCharacter("coding Academy by Orange","o"));

for(let i=0;i<=20;i++){
    console.log(i);
}

for(let i=3;i<=29;i+=2){
    console.log(i);
}

for(let i=12;i>=-14;i-=2){
    console.log(i);
}

for (let i=50;i>=20;i--){
    if (i%3===0);{
        console.log(i);
    }
}

let str="CodingAcademy";
let array=[7, 500, 'KH404', 'black', 36];
for (let array=0;i<array.lenght;i++){
    console.log(array[i]);
}
for(let i=str.lenght -1;i>=0;i--){
    console.log(str[i]);
}

let arr=[7, 23, 18, 9, -13, 38, -10, 12, 0, 124];
let even=[];
let odd=[];
for(let i=0;i<arr.length;i++){
    if(arr[i]%2===0){
        even.push(arr[i]);
    }else {
        odd.length(arr[i]);
    }
}
console.log("even numbers:",even);
console.log("odd numberd:",odd);

let Protein =['chicken', 'pork', 'tofu', 'beef', 'sh', 'beans'];
let Grain =['rice', 'pasta', 'corn', 'potato', 'quinoa', 'crackers'];
let Vegetable =['peas', 'green beans', 'kale', 'edamame', 'broccoli', 'asparagus'];
let Beverage=['juice', 'milk', 'water', 'soy milk', 'soda', 'tea'];
let Dessert =['apple', 'banana', 'more kale', 'ice cream', 'chocolate', 'kiwi'];
let numberOfMeals=5;
let meals =[];
for (let i=0; i<numberOfMeals; i++){
    let meal={};
}
meal.Protein=proteins[Math.floor(Math.random()*Proteins.length)];
meal.Grain=Grains[Math.floor(Math.random()*Grains.length)];
meal.Vegetable=Vegetables[Math.floor(Math.random()*Vegetables.length)];
meal.Beverage=Beverages[Math.floor(Math.random()*Beverages.length)];
meal.Dessert=Desserts[Math.floor(Math.random()*Desserts.length)];
let isDuplicate=meals.some(existingMeal => existingMeal.protein===meal.Protein && existingMeal.Grain===meal.Grain && existingMeal.Vegetable===meal.Vegetable && existingMeal.Beverage===meal.Beverage && existingMeal.Dessert===meal.Dessert);
if(!isDuplicate){
    meals.push(meal);
}else {
    i--;
}
console.log(meals);