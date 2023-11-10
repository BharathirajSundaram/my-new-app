let obj1 = { name: "Person 1", age: 5 };
let obj2 = {  age: 5,name: "Person 1" };

//Using comparing operator:
//comparing obj1 with obj2 age values:
console.log(">>>>>>>>>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>>>>>>>>" , (obj1.age)===(obj2.age),">>>>>>>>>>>>>>>>>>>>>" )
//comparing obj1 with obj2 name values:
console.log(">>>>>>>>>>>>>>>>>>>>>");
console.log(">>>>>>>>>>>>>>>>>>>>>" , (obj1.name)===(obj2.name),">>>>>>>>>>>>>>>>>>>>>" )




//console.log(obj1.name)
//console.log(obj2.name)

let mykeys = Object.keys(obj1,obj2);
//console.log('Keys : ', mykeys);

//Using for Loop:

for(let i=0;i<mykeys.length;i++){
    let currentKey = mykeys[i];
    console.log(obj1[currentKey]==obj2[currentKey]);
}

//using forEach:

mykeys.forEach((val)=>{
    console.log(obj1[val]==obj2[val])
});

//using for in:
for (let key in obj1) {
    console.log(obj1[key]==(obj2[key]))
}

//using for of:

for (let iterator of mykeys) {

    console.log(obj1[iterator]==obj2[iterator])
    
}


