//Use of new Key word
/*
    function multiplayBy5(num){
        return num*5
    }
    console.log(multiplayBy5(5))
    console.log(multiplayBy5.power)
    console.log(multiplayBy5.prototype) // {} :- by default context (multiplayBy5 this :- it return prototype reference of caller method and referace not visibal so returning emply)

    function createUser(userName, score){
        this.userName = userName
        this.score = score
    }

    createUser.prototype.increment = function(){
        this.score++
    }

    createUser.prototype.printMe = function(){
        console.log(`${this.userName} score is ${this.score}`)
    }

    const chai = new createUser('chai',25)
    const tea = createUser('tea',250) 

    chai.printMe()
    tea.printMe()
*/
/*
    Notes :- 

    Here's what happens behind the scenes when the new keyword is used:

    A new object is created: The new keyword initiates the creation of a new JavaScript object.

    A prototype is linked: The newly created object gets linked to the prototype property of the constructor function. This means that it has access to properties and methods defined on the constructor's prototype.

    The constructor is called: The constructor function is called with the specified arguments and this is bound to the newly created object. If no explicit return value is specified from the constructor, JavaScript assumes this, the newly created object, to be the intended return value.

    The new object is returned: After the constructor function has been called, if it doesn't return a non-primitive value (object, array, function, etc.), the newly created object is returned.

*/

// Use of Prototype :-
let myHeros = ['thor','spiderman']
let heroPower = {
    thor : 'Shubham',
    spiderman : 'sling',

    getSpiderPower : function(){
        console.log(`spidy power is ${this.spiderman}`)
    }
}

Object.prototype.shubham = function(){
    console.log("Shubham is present in all object")
}

Array.prototype.heyShubham = function(){
    console.log("Shubham say's hello")
}

heroPower.shubham() //Shubham is present in all object
myHeros.shubham() //Shubham is present in all object
myHeros.heyShubham() //Shubham say's hello
//heroPower.heyShubham() //Uncaught TypeError: heroPower.heyShubham is not a function

// inheritance
const user = {
    name : "chai",
    email : 'chai@google.com'
}
const teacher = {
    makeVideos : true
}
const teachingSupport = {
    isAvailable : false
}
const TaSupport = {
    makeAssiganment : 'JS Assiganment',
    fullTime : true,
    __proto__: teachingSupport
}
teacher.__proto__ = user

// moder sintex 
Object.setPrototypeOf(teachingSupport,teacher)

let anotherUserName = 'chaiOrCode           '
String.prototype.trueLength = function(){
    console.log(this)
    console.log(`True length is : ${this.trim().length}`)
}
anotherUserName.trueLength()

"Shubham".trueLength()
'iceTea'.trueLength()