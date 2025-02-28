/*
class User{
    constructor(email,password){
        this.email = email
        this.password = password
    }
    set email(email){
        this._email = email
    }
    set password(password){
        this._password = password
    }

    get email(){
        return this._email
    }
    get password(){
        return this._password.toUpperCase()
    }
}

const hitesh = new User("Shubham@.ai",'abc')
console.log(hitesh.password)
*/
// older way

// function User(email, password){
//     this._email = email
//     this._password = password

//     Object.defineProperty(this,'email',{
//         get: function(){
//             return this._email.toUpperCase()
//         },
//         set: function(value){
//             this._email= value
//         }
//     })
//     Object.defineProperty(this,'password',{
//         get: function(){
//             return this._password.toUpperCase()
//         },
//         set: function(value){
//             this._password = value
//         }
//     })
// }
// const chai = new User("chai@chai.com",'Chai')
// console.log(chai.email)

const User = {
    _email: "h@hc.com",
    _password: "abc",

    get email(){
        return this._email.toUpperCase()
    },
    set email(email){
        this._email=email
    },

    get password(){
        return this._password.toUpperCase()
    },
    set password(password){
        this._password=password
    }
}

const tea = Object.create(User)
console.log(tea.email) 