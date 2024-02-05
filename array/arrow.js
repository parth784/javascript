const user={
    username:"parth tamiwar",
    cost: 889,

    welcomeBack:function(){
       console.log(`the name of the user is: ${this.username}`)
       console.log(this)
    }

}
user.welcomeBack()
user.username="bhau"
user.welcomeBack()

console.log(this)//global refrence {} if we run this in windows it will give a list of properties

function daySucks(){
    const user="parth"
    console.log(this.user)//not valid in function only valid in objects
    console.log(this)//will display a list of parameters
}

daySucks()

// const addNum=(num1,num2)=>{
//     console.log(this)
//     return num1+num2
// }

const addNum=(num1,num2)=>num1+num2 //implicit 
console.log(addNum(1,2))

const addNum1=(num1,num2)=>(num1+num2)//we always need to put an return statement while using curly brackets in function 
const passObj=()=>({user:"parth"});//if i need to pass an object i will always need to use parenthesis ()
//-----------------------------------------------------------------------------------
//iffy
//immediatly invoked function expressions

(function chai(){
    console.log("iffy is executed")
})();//always put a semicolen here//the previos statement should also contain a ;
//why do we use this?
//to avoid the pollution lead by the global scope variable/declerations

((name)=>(console.log(`hello , ${name}`)))("parth");