let z=1;
while (z<=10){
    console.log(z);
    z+=1;
}

let number1= [1, 2, 3, 4, 5];
for(let i=0;i<number1.length;i++){
    console.log(number1);
}

for(let x =0;x<=10;x+=2){
    if (x%2===0){
        console.log(x);
    }
}

let sum=0;
for(let i=1;i<=10;i++){
    sum +=i;
}
console.log(sum);

let number2 = [1, 2, 3, 4, 5];
let maxNumber = number2[0]; 
for (let i = 1; i < number2.length; i++) {
    if (number2[i] > maxNumber) {
        maxNumber = number2[i]; 
    }
}
console.log(maxNumber); 


let numbers = [1, 2, 3, 4, 5]; 
let sum1 = 0;
for (let i = 0; i < numbers.length; i++) {
    sum1 += numbers[i];
}
let average = sum1 / numbers.length; 
console.log(average); 
