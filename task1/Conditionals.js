let year_of_brith_candidate =2001;
let current_year=new Date().getFullYear();
let candidate =current_year-year_of_brith_candidate;
if  (candidate >60){
    console.log("You may join the seniors’ program");
} else if ( candidate>30  ) {
    console.log("You are not eligible.You may join other programs");
} else if (18<candidate && candidate<30 ) {
    console.log("You are eligible. Start your application");
} else if (candidate<18 ) {
    console.log("You may join the kids' program");
}
console.log(candidate);

let str="OrAnGe”";
let str1=str.split('').map(char=>char==char.toUpperCase()? char.toLowerCase():char.toUpperCase()).join(' ');
console.log(str);

let str2="Coding Academy by Orange";
let str3=str2.split(' ').map((word,index)=>{
    if (index===0){
        return word.toLowerCase();
    }
    return word.charAt(0).toUpperCase() + word.slice(1).toLowerCase();
})
.join('');
console.log(str3);

let str4=(['Coding', 'Academy', 'By', 'Orange', 'By']);
let elementToRemove ="By";
str4=str4.filter(item =>item !== elementToRemove);
console.log(str4);

let number=6;
if (number %2===0){
    console.log("number is even");
} else {
    console.log("number is odd");
}

let value=8;
if (typeof value ==='number'&& !isNaN(value)){
    console.log("number");
} else{
    console.log("not a number");
}

let num1 =10;
let num2=6;
if (num1>num2){
    console.log(num1);
} else {
    console.log(num2);
}

let x=3;
let y=5;
let z=8;
if (x===y && y===z){
    console.log("Equilateral");
} else if (x!==y&&y!==z&&x!==z){
    console.log("Scalene");
} else{ 
    console.log("Isosceles");
}

let a=5;
let start =6;
let end=12;
if (a >= start && a<=end){
    console.log("number in range");
}else{
    console.log("number is out of range");
}

let year =2001;
if ((year %4===0 && year %100 !==0)||(year % 400===0)){
    console.log("leap year");
}else{
    console.log("not a leap year");
}