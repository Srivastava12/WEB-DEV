// for of

// ["","",""]
// [{},{},{}]

// const arr = [1, 2, 3, 4, 5]

// for (const num of arr){
//     console.log(num);
    
// }

// const greeting = "Hello world !"
// for(const greet of greeting){
//     console.log(greet)
// }

// Maps
const map = new Map()
map.set('IN',"India")
map.set('US',"United states of america")
map.set('Fr',"France")
map.set('IN',"India") //it will be not store in map obj becouse map contain only unike values
// console.log(map)
/*
    {size: 3, IN => India, US => United sta…f america, Fr => France}
*/
// for (const key of map) {
//     console.log(key)
// }
/*
    ['IN', 'India']
    ['US', 'United states of america']
    ['Fr', 'France']
*/
// for (const [key, values] of map) {
//     console.log(key,' :- ',values)
// }
/*
    IN  :-  India
    US  :-  United states of america
    Fr  :-  France
*/
// const myObject = {
//     'game1' : 'NFS',
//     'game2' : 'Spiderman'
// }
// for (const [key, values] of myObject) {
//      console.log(key,' :- ',values)
// } //myObject is not iterable for-of not applicable on object

// const myObject = {
//     js : 'javascript',
//     cpp : 'C++',
//     rb :  'Ruby',
//     swift: 'swift by apple'
// }
// for(const key in myObject){
//     console.log(`${key} : ${myObject[key]}`)
// }
/*
    js : javascript
    cpp : C++
    rb : Ruby
    swift : swift by apple
*/
const programming = ['js','rb','py','java','cpp']
// for(const key in programming){
//     console.log(key)
// }// 0 1 2 3 4
// for(const key in programming){
//     console.log(programming[key])
// }// js rb py java cpp

// for(const key in map){
//     console.log(key)
// }// not apply on map

const coding = ['js','ruby','java','python','cpp']
// coding.forEach( function (item) {
//     console.log(item)
// })//js ruby java python cpp
// coding.forEach( (item) => {
//     console.log(item)
// })//js ruby java python cpp

// function printMe(item){
//     console.log(item)
// }
// coding.forEach(printMe) //js ruby java python cpp

coding.forEach((item,index,array)=>{
    console.log(item,index,array)
})
/*
    js 0 (5) ['js', 'ruby', 'java', 'python', 'cpp']
    ruby 1 (5) ['js', 'ruby', 'java', 'python', 'cpp']
    java 2 (5) ['js', 'ruby', 'java', 'python', 'cpp']
    python 3 (5) ['js', 'ruby', 'java', 'python', 'cpp']
    cpp 4 (5) ['js', 'ruby', 'java', 'python', 'cpp']
*/
const myCoding = [
    {
        languageName : "javascript",
        languageFileName : "js",
    },
    {
        languageName : "java",
        languageFileName : "java",
    },
    {
        languageName : "python",
        languageFileName : "py",
    }
]

myCoding.forEach( (item) => {
    console.log(item.languageName)
    console.log(item.languageFileName)
})