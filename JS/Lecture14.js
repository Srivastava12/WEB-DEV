// Array
const myArray = [0, 1, 2, 3, 4, 5, true,'shubham']
const myHeros = ["shaktiman","naagraj"]

const myArr2 = new Array(1,2,3,4)

// console.log(myArray[1])
// Array methods

// myArray.push(6)
// console.log(myArray.push(7))
// console.log(myArray)
// console.log(myArray.pop())
// console.log(myArray)

// myArray.unshift(9)
// console.log(myArray) // [9, 0, 1, 2, 3, 4, 5, true, 'shubham']

// myArray.shift()
// console.log(myArray) // [0, 1, 2, 3, 4, 5, true, 'shubham']

// console.log(myArray.includes(9)) //false
// console.log(myArray.indexOf(9)) //-1
// console.log(myArray.indexOf(3)) //3
// console.log(myArray)

// const newArray = myArr2.join()
// console.log(myArr2) //[1, 2, 3, 4]
// console.log(newArray) //1,2,3,4
// console.log(typeof newArray) //string

// slice , splice
//slice
console.log("A", myArray) //[0, 1, 2, 3, 4, 5, true,'shubham']
const myn1 = myArray.slice(1,3)
console.log(myn1) //[1, 2]
console.log("B", myArray) //[0, 1, 2, 3, 4, 5, true,'shubham']

//splice
const myn2=myArray.splice(1,3)
console.log(myn2) //[1, 2, 3]
console.log("C",myArray) //[0 4, 5, true,'shubham']

