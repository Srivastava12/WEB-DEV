// Objects 

const mySym = "key"

const JsUser={
    name : "Shubham",
    "full name" : "Shubham Kumar",
    // mySym: "myKey1",//It will be not consider symbel as a key 'mySym' is a normal string key as well
    [mySym] : "myKey1", //It will be consider as a symbol not a string
    age : 18,
    location : "Jaipur",
    email : "hitesh@google.com",
    isLoggedIn : false,
    lastLoginDays : ["Monday","Saturday"]
}
// console.log(JsUser.email)
// console.log(JsUser["email"])
// console.log(JsUser["full name"])

// console.log(typeof JsUser.mySym) //String 
// console.log(typeof JsUser.mySym) //undefinedn:- becouse in JsUser object have not any 'mySym' key 
// console.log(typeof JsUser.key) // String :-becouse here JsUser object mySym key as a symbol and this symbol value is 'key' 
// console.log(JsUser.key) //myKey1
// console.log(JsUser[mySym]) //myKey1

// JsUser.email = "shubham@123"
// console.log(JsUser)
// Object.freeze(JsUser) // use for look the object after that can to change and modify object 

// JsUser.email = "Rahul@123"
// console.log(JsUser)

JsUser.greeting = function(){
    console.log("Hello Js User")
}
console.log(JsUser.greeting) //Show the function defination

console.log(JsUser.greeting()) //'Hello Js User' with undefine

JsUser.greeting2 = function(){
    console.log(`Hello Js User, ${this["full name"]}`)
}

console.log(JsUser.greeting2) //Show the function defination
console.log(JsUser.greeting2()) //'Hello Js User, Shubham Kumar' with undefine
