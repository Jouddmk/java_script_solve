let arr1= [1, 2, 3, 4, 5];
arr1.push(6);
arr1.forEach(function(number){
    console.log(number);
});

let num=[1, 2, 3, 4, 5];
let num1=num.map(function(number){
    return number *2;
});
console.log(num1);

let num2=[1, 2, 3, 4, 5];
let num3=num2.filter(num=> num%2===0);
console.log(num3);

let num4=[1, 2, 3, 4, 5];
let num5=num4.reduce((accumulator,currentValue)=> accumulator + currentValue,0);
console.log(num5);

let arr3= ["apple", "banana", "cherry"]; 
console.log(arr3.sort());
console.log(arr3.reverse());

let num6=[1, 2, 3];
let num7=[4, 5, 6];
console.log(num6.concat(num7));

let num8= [1, 2, 3, 4, 5]; 
console.log(num8.splice(1,1));

let num9= [1, 2, 3, 4, 5]; 
let index = num9.indexOf(3);
console.log(index);
console.log(num9.join(","));

let str1= [1,2,3,4,5]; 
console.log(str1.join(","));

let str = "1,2,3,4,5";  
let arr = str.split(",");
console.log(arr[arr.length - 1]);  

let number1= [1, 2, 3, 4, 5];
console.log(number1.join(' ,'));

let number2= [1, 2, 3, 4, 5];
for (let value of number2){
    console.log(value);
}

let number3= [1, 2, 3, 4, 5];
for(let index in number3){
    console.log(num[index]);
}

let number4 = [1, 2, 3, 4, 5];
console.log(Array.isArray(number4)); 


let arr7 = Array.of(1, 2, 3);
console.log(arr7);  
