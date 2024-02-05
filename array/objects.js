//singelton


//object literals
const mySym=Symbol("happy")//interview questions

const user={
name:"parth",
"myFullName":"parth Abhay Tammiwar",
age:20,
hobbie:["dancing","eating"],
single:true,
[mySym]:"prax"
}
//accessing
// console.log(user);
// console.log(user.age)
// console.log(user.mySym)//it will give undefined
// console.log(user["mySym"])
// console.log(user["age"])
// console.log(user["myFullName"])

//functions

user.greetings = function(){
    console.log("hello js user");
}
user.greetingsTwo = function(){
    console.log(`hello js user, ${this.name}`);//string interpulation
}

//console.log(user.greetings)//function[anony]
console.log(user.greetings())
console.log(user.greetingsTwo())

