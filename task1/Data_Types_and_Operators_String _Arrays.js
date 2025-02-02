// Cash ow ratio
let cash=1000;
let current_liabilities=500;
let cash_flow_ratio=cash/current_liabilities;
console.log(cash_flow_ratio);
// Net income
const revenues= 1000; 
const expenses= 500;
const Net_income=revenues - expenses;
console.log(Net_income);
// Total assets
 let liabilities= 1000; 
 let equity= 500;
 let Total_assets= liabilities+ equity;
 console.log(Total_assets);
//  Net income (using prot margin and sales)
 const  profit= 1000; 
 const sales= 500;
 const profit_sales= profit * sales;
 console.log(profit_sales);
// Average
 const x=7;
 const y=9;
 const z=2;
 const a=(x+y+z)/3
 console.log(a)
//  Discount
 let price=150;
 let discount= (150*30)/100;
 let Discount=(price - discount);
 console.log(Discount);
//  Age limit (older than 18 and less than 30)
let age= 22;
console.log(age>18 && age <30);
// Exponential
let num1=2;
let num2= 3;
console.log(num1**num2);
// Remainder
let number1= 10;
let number2=4;
console.log(number1%number2);
// ....
console.log(typeof(100));
console.log(typeof(73.9));
console.log(typeof(NaN));
console.log(typeof("Water"));
console.log(typeof(false));
console.log(typeof(9 != 11));
console.log("Orang" + "e");
console.log("Orange" - "s");
console.log("4" + "8");
console.log("4" - "8");
console.log("name" + 3);
console.log("name" - 3);
console.log(82 * "word");
console.log( 1 + "hello");
console.log( "hello" + 1);
console.log(1 + true);
console.log( "hello" + true);
console.log(typeof (Infinity));
console.log( 1 == '1');
console.log( 1 === '1');
// string
let str="Welcome to Orange";
console.log(str.toUpperCase());
let word =str.split(" ");
console.log(word[1].toUpperCase());
console.log(str.replace('to','from'));
console.log(str.toLowerCase());
console.log(str.length);
console.log(str.replace('Orange','"Orange"'));
console.log(str.concat(" Jordan"));
// ............
let str1="cactus";
// console.log(str1.replace('c','*'));
let str2=str1.substring(0,2)+"*"+str1.substring(3);
console.log(str2);
// arrays 
let arr =(["Coding", "Academy", "By", "Orange"]);
console.log(arr.concat("jordan"));
console.log(arr.splice(0,2));

let arr1=(["Coding", "Academy", "By", "Orange"]);
console.log(arr1.unshift('Welcome','To'));
console.log(arr1);


arr1.splice(0,3);
console.log(arr1);

let arr2=(['Coding', 'Academy', 'By', 'Orange']);
console.log(arr2.join(" "));
console.log(arr2);

arr2.splice(1,2);
console.log(arr2);
