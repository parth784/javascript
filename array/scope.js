var a=20
var a=67
//console.log(a)//here i can redeclare and it also exceeds the scope of {}
// let a=20
// let a=67//can't be redaclared and follow the scope {}
// console.log(a)

let b=67//global scope

if(true){
    //b=33//it will change the global variable 
    let b=98//if i declare this variable again by let ,it woule be assingned as a new in the given scope //block scope
    let c=50
    console.log(b)
    console.log(c)
}

console.log(b)
//console.log(c)//it is not defined outside as scope restricted


// note : scope is diffrent in node and console

//hoasting
console.log(addOne(6))

function addOne(num){
    return num+1
}

console.log(addOne(6))

//console.log(addTwo)//not valid before decleration
const addTwo = function(num){//function expression
    return num+2;
} 
console.log(addTwo)