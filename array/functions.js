// function doSomething(name){//here name is parameter
//     console.log(`hiii, ${name}`)
// }
// doSomething("parth")//here parth is argument

function takeName(name="default"){
    //now the usernames value will never be undefined
    if(!name){
        console.log("please enter yr name")
        return
    }
    return `is yr name ${name}`
}

console.log(takeName())
console.log(takeName("parth"))

function calculatePrice(val1,val2,...nums){
    console.log(`val1: ${val1},val2: ${val2}`)
    return nums
}
console.log(calculatePrice(100,200,300,400))