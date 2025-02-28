
const user = {
    userName : "Shubham",
    price : 999,
    welcomeMessage : function (){
        console.log(`${this.userName}, welcome to website`)
        console.log(this) 
        /*
           1:- {userName: 'Shubham', price: 999, welcomeMessage: ƒ}
           2:- {userName: 'sam', price: 999, welcomeMessage: ƒ}
        */
    }
}

// user.welcomeMessage() //Shubham, welcome to website
// user.userName = "sam"
// user.welcomeMessage() //sam, welcome to website
// console.log(this) //{}

// function chai(){
//     let userName = "Hitesh"
//     console.log(this.userName) //undefined only we can use this with object not with function
// }
// chai()

// const chai = function (){
//     let username = "hitesh"
//     console.log(this.username) //undefined
// }
// chai()

// const chai = () =>{
//     let username = "Hitesh"
//     //console.log(this.userName) // undefined
//     // console.log(this) //{}
// }
// chai() 

// const addTwo = (num1 , num2) =>{
//     return num1+num2
// } //Explicit return way
// console.log(addTwo(3,4)) //7

// const addTwo = (num1 , num2) => num1+num2 //Implicit return way
// console.log(addTwo(3,4)) //7

// const addTwo = (num1 , num2) => (num1+num2)
// console.log(addTwo(3,4)) //7

// const addTwo = () => ({username : "Shubham"})
// console.log(addTwo()) //{username: 'Shubham'}


const addTwo = (num1,num2) => ({username : "Shubham"})
console.log(addTwo(3, 4)) //{username: 'Shubham'}