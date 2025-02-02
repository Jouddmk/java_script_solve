let person={name:"joud",age:30, job:"full stack"};
let arr=Object.keys(person);
console.log(arr);

let arr1=Object.keys(person).length;
console.log(arr1);

let arr2={name:"joud",age:30};
let arr3={ job:"full stack", country:"jordan"};
let arr4=Object.assign({},arr2,arr3);
console.log(arr4);

let arr5={};
for (let key in person){
    if (typeof person[key]==="string"){
        arr5[key]=person[key].toUpperCase();
    }else {
        arr5[key]=person[key];
    }
}
console.log(arr5);


let person1={name:"joud",age:null, job:"full stack"};
let arr6={};
for (let key in person1){
    if (person1[key]!==null){
        arr6[key]=person1[key];
    }
}
console.log(arr6);

let arr7=Object.keys(person).sort();
console.log(arr7);