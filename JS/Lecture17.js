//const tinderUser = new Object() // it is a singleton object
const tinderUser = {} // Not a singleton object

tinderUser.id = "123abc"
tinderUser.name = "Sammy"
tinderUser.isLoggedIn = false


// console.log(tinderUser)

// const regularUser = {
//     email : "Shubham@123",
//     fullName : {
//         userFullName: {
//             fullName : "Shubham",
//             lastName : "Kumar"
//         }
//     }
// }

// console.log(regularUser.fullName.userFullName.fullName) // Shubham

const obj1 = {1: "a",2: "b"}
const obj2 = {3: "a",4: "b"}

// obj3 = {obj1, obj2}
// console.log(obj3)//{obj1: {…}, obj2: {…}}

// const obj3 = Object.assign(obj1,obj2)
// console.log(obj3) //{1: 'a', 2: 'b', 3: 'a', 4: 'b'}
// console.log(obj1) //{1: 'a', 2: 'b', 3: 'a', 4: 'b'}

// const obj3 = Object.assign({},obj1,obj2)
// console.log(obj3) //{1: 'a', 2: 'b', 3: 'a', 4: 'b'}
// console.log(obj1) //{1: 'a', 2: 'b'}

// const obj4 ={...obj1,...obj2}
// console.log(obj4) //{1: 'a', 2: 'b', 3: 'a', 4: 'b'}

const user = [
    {
        id : 1,
        email : "Shubham@123"
    },
    {
        id : 1,
        email : "Shubham@123"
    }, 
    {
        id : 1,
        email : "Shubham@123"
    },
    {
        id : 1,
        email : "Shubham@123"
    }
]
console.log(user[1].email)

// console.log(tinderUser)

// console.log(Object.keys(tinderUser)) // return type is array return key's of given object output :-  ['id', 'name', 'isLoggedIn']

// console.log(Object.values(tinderUser))//return type is array return values of given object output :-  ['123abc', 'Sammy', false]

// console.log(Object.entries(tinderUser)) // return type is array of array in the form of entry (Key: Value ) pare of given object output :- [ ['id': '123anc'],['name':'Sammy'],['isLoggedIn',false]]

console.log(tinderUser.hasOwnProperty('isLoggedIn')) //true