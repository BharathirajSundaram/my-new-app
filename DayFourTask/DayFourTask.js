/*//a. Print odd numbers in an array

let arr = [];
for (let i = 1; i < 100; i += 2) {
    arr.push(i);
}
//console.log(arr);

//=========================================================================================

//b. Convert all the strings to title caps in a string array
let str = "my name is bharathiraj sundaram";

let output = str.split(' ')
    .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ");
//console.log(output);

//=========================================================================================

//c. Sum of all numbers in an array
let inputArr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
let addition = inputArr.reduce((sum, value) => {
    return sum += value;
}, 0);
//console.log(addition);


//=========================================================================================

//d. Return all the prime numbers in an array
let inputArr1 = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
console.log(inputArr1);
let primeNum = inputArr1.filter((value) => {
    for (let i = 2; i <= Math.sqrt(value); i++) {
        if (value % i === 0) { return false }
    }
    return true
});
console.log(primeNum);


//e. Return all the palindromes in an array

let myArray = ['racecar','pop','dad','same','name','sas','bob']

let result = myArray.filter((word)=>{
    var p = word.split("").reverse().join("");
    return p === word ? word : "";
})
console.log(result)



//f. Return median of two sorted arrays of the same size.

var ar1 = [1,12,15,26,38,50];
var ar2= [2,13,17,30,45,20];

var ar3= ar1.concat(ar2);
ar3=ar3.sort((a,b)=>{
    return a-b
});
console.log(ar3);

let length = ar3.length;

let m1= length/2;
let m2= m1-1;
let value1= ar3[m1];
let value2= ar3[m2];

console.log(m1+ ">>>>>>>>>"+length+">>>>>>>>>>>"+m2)
console.log( ar3.indexOf(m1)+" "+ar3.indexOf(m2))

let result= (value1+value2)/2;
console.log(result)
*/
//g. remove duplicates from an array

let names = ["Mike","Matt","Adam","Adam","Jenny","Mike"];
let num = [1,7,2,2,3,4,4,5,6,6,7,8,9];
let uniqueValues =names.filter((value, index, array) => array.indexOf(value) === index);
console.log(uniqueValues.sort())
