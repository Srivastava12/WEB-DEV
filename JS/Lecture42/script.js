// Object literal :- 
// const user = {
//     username : 'Shubham',
//     loginCount : 8,
//     signedIn : true,

//     getUserDetails : function(){
//         // console.log("Got user details from database")
//         // console.log(`Username : ${this.username}`)
//         // console.log(this)
         
//     }
// }
// console.log(user.username)
// console.log(user.getUserDetails())
// console.log(this) // {}

// Constructor function 
function user(username,loginCount,isLoggedIn){
    this.username = username
    this.loginCount = loginCount
    this.isLoggedIn = isLoggedIn

    this.greeting = function(){
        console.log(`WelCome ${this.username}`)
    }
    return this // implicetly it's define so not need to return but we write for understanding
}
const userOne = user('Shubham',12,true)
const userTwo = user('chai',11,false) // it will be update previas record userOne -- for remove this problem we use 'new' key word for constructor call
console.log(userOne)
userOne.greeting()
console.log(userTwo)
userTwo.greeting()

const newUserOne = new user('Shubham',12,true)
const newUserTwo = new user('chai',11,false)// Here new previse record will be not update by next becouse we are using new key word
console.log(newUserOne)
newUserOne.greeting()
console.log(newUserTwo) 
newUserTwo.greeting()