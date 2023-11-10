//a. Print odd numbers in an array

let arr = [];
for (let i = 1; i < 100; i += 2) {
    arr.push(i);
}
//console.log(arr);


//b. Convert all the strings to title caps in a string array


let str = "my name is bharathiraj sundaram";



let output = str.split(' ')
   .map(word => word[0].toUpperCase() + word.substring(1).toLowerCase()).join(" ");
//console.log(output);


//c. Sum of all numbers in an array


let inputArr = [1,2,3,4,5,6,7,8,9,10]

let addition=inputArr.reduce((sum,value)=>{
    return sum +=value;
    
},0);
console.log(addition);






