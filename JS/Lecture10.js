
// Memory in JS

/* 
     Stack,Heap
     Primitive :- Stack
     Non Primitive :- Heap
*/

let myName = "Shubham"
let anotherName = myName
anotherName = "Kumar"

console.log(myName)
console.log(anotherName)

let userOne = {
    email : "shubham@xyz",
    upi : "user@ybl"
}

let userTwo = userOne;
userTwo.email = "hitesh@google.com"
 console.log(userOne)
 console.log(userTwo)

let name = "shubham"
let title = name

name="kumar"

console.log(title)
console.log(name)

