// ES6
// Part-1

// class user {
//     constructor(username,email,password){
//         this.username = username
//         this.email = email
//         this.password = password
//     }

//     encryptPassword(){
//         return `${this.password}abc`
//     }
//     changUserName(){
//         return `${this.username.toUpperCase()}`
//     }
// }

// const chai = new user("chai","chai@google.com","user123")
// console.log(chai.encryptPassword())
// console.log(chai.changUserName())

// behind the scene

// function user(username,email,password){
//     this.username = username
//     this.email = email
//     this.password = password
// }

// user.prototype.encryptPassword = function(){
//     return `${this.password}abc`
// }
// user.prototype.chnagUserName = function(){
//     return `${this.username.toUpperCase()}`
// }

// const tea = new  user('tea',"chai@google.com","user123")

// console.log(tea.encryptPassword())
// console.log(tea.chnagUserName())

//Part - 2

// class User {
//     constructor(username){
//         this.username = username
//     }
//     logMe(){
//         console.log(`USERNAME is ${this.username}`)
//     }
// }

// class Teacher extends User{
//     constructor(username,email,password){
//         super(username)
//         this.email = email
//         this.password = password
//     }

//     addCourse(){
//         console.log(`A new course was added by ${this.username}`)
//     }
// }

// const chai = new Teacher("chai","chai@teacher.com",'123')
// chai.logMe()
// chai.addCourse()

// const masalaChai = new User("masalachai")
// masalaChai.logMe()

// console.log(chai === Teacher) // false
// console.log(chai === masalaChai) // false
// console.log(chai instanceof User) // true

//Part - 3
class User {
    constructor(username) {
        this.username = username
    }

    logMe(){
        console.log(`Username : ${this.username}`)
    }

    static createId(){
        return `123`
    }
}
const shubham = new User("Shubham")
// console.log(shubham.createId()) 

class Teacher extends User{
    constructor(username,email){
        super(username)
        this.email = email
    }
}

const iphone = new Teacher('iphone','i@phone.com')
console.log(iphone.logMe())
console.log(iphone.createId())