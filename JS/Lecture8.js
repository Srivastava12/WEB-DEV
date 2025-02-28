// Comparison of datatypes

// console.log(2>1)
// console.log(2>=1)
// console.log(2<1)
// console.log(2==1)
// console.log(2!=1)

// console.log("2" > 1) //true
// console.log("02" > 1) //true

// console.log(null > 0) //false
// console.log(null == 0) //false
// console.log(null >= 0) //true

/*
    The reason is that an equality check == and comparisons > < >= <= work differently
    Comparisons convert null to a number treating it as 0
    That's why 3 null >=0 is true and  
*/

// console.log(undefined == 0) // false 
// console.log(undefined > 0) // false
// console.log(undefined < 0) // false

// === (Strictly check)

// console.log("2" === 2) // false
// console.log(2 == 2) // true

console.log("ram" == "Ram") // false
console.log("ram" == "ram") // true
 







