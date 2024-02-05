//can store any data type num,bool,str
//resizable
//shallow copies are created:-properties share the same refrence point (heap)

const myarray=[1,2,'4',"pat",true]
//console.log(myarray)
const arr=new Array(1,2,3,4,5)
//console.log(arr)

//array methods

// arr.push(8)         
// console.log(arr)                            
// arr.pop()         
// console.log(arr) 

const ar1=[1,2,3,4,5,6,7]
//console.log(`A ${ar1}`);
//console.log(ar1);
// console.log(ar1.splice(1,3));//see diffrence for slice
// console.log(`A ${ar1}`);


//ar1.join()
const newarray=[...ar1,...myarray]//glass ko chod do jamin pe
//console.log(newarray)


//while data scrapping

console.log(Array.isArray("parth"));//returns bool
console.log(Array.from("parth"));//craetes an array from string
console.log(Array.from({name:"parth"}))//we need to specify key or value
console.log(Array.from(newarray));

let score1=87
let score2=85
console.log(Array.of(score1,score2,newarray));//like we push an array at last,it pushes at specific location  by our need



