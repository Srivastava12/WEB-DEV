// Data Types
/*
    Primitive
      7 Types :-
      1 :- String
      2 :- Number
      3 :- Boolean
      4 :- null
      5 :- undefined
      6 :- System
      7 :- BigInt
    Non-Primitive (Reference)
      * Array
      * Objects
      * Functions
*/

//Primitive Example
const score = 100
const scoreValue = 100.3

const isLoggedIn = false
const outsideTemp = null
let userEmail

const id = Symbol('123')
const anotherId = Symbol('123')

console.log(id == anotherId) // false
console.log(typeof id) //symbol

const bigNumber = 1896549863589714989654n
console.log(bigNumber)
console.log(typeof bigNumber)//bigint

//Non Primitive

const heros = ["shaktiman","naagraj","doga"]
console.log(typeof heros)//object

let myObj = {
    name : "shubham",
    age : 22
}
console.log(typeof myObj)//object

 const myFunction = function(){
    console.log("Hello World")
}
console.log(typeof myFunction)//function


