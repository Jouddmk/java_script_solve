let age=27;
if (age > 18){
    console.log("You are an adult");
}

let num=4;
if(num %2===0){
    console.log("The number is even");
}

char='a';
if ((char>="a"&& char<= "z")||(char >="A"&& char <="Z")
  ){   console.log("It's a letter");
}else {
    console.log("It's not a letter");
}

let x=5;
if (x>0){
    console.log(x + "is a positive number");
}else{
    console.log(x + "is a negative number");
}

let z=9;
if (z%3===0){
    console.log(z+ " is a multiple of 3");
}else {
    console.log(z+ " is a multiple of 3");
}

let password="Dwankntf";
if (password.length>=8){
    console.log("Your password is strong");
} else{
    console.log("Your password is waek");
}

let age1=30;
if (age1 >=18 && age1 <=65){
    console.log("You are of working age");
}else{
    console.log("You are not of working age");
}

let color= "green";
if (color==="red"||color==="green"||color==="blue"){
    console.log(color +  "is a primary color");
}else {
    console.log(color + "is a primary color");
}

function isValidNumber(value){
    if(!isNaN(value)&& value !== "" && !isNaN(parseFloat(value))){
        console.log(value + "is a valid number ");
    }else{
        console.log(value + "is not a valid number ");
    }
}
isValidNumber(14);     
isValidNumber("sgd");