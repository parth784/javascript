const person=new Object()//singelton 
person.id="123"
person.name="sitabardi"
console.log(person)

//object literal
const person1={
    email:"xyz@gmail.com",
    fullname:{
        user:"parag",
        age:5,
        info:{
            gender:"male",
            isHappy:true

        }
    }
}

//console.log(person1.fullname.age);

const obj1={1:'a',2:'b'}
const obj2={3:'c',4:'d'}

const obj3={...obj1,...obj2}
//console.log(obj3)

const returnTarget=Object.assign({},obj1,obj2)
console.log(returnTarget)//here{} is the target all other objects /source are merged into it

// console.log(Object.keys(obj3))
// console.log(Object.entries(obj3))
// console.log(Object.values(obj3))

//destructure
const goal={
    aim:"to learn js",
    benifit:"paisa hi paisa",
    requirements:"consistency"
}

//console.log(goal.requirements)

const{requirements:requ}=goal
console.log(requ)
