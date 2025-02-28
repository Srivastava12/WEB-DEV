
const userEmail = []
if(userEmail.length===0){
    console.log("Array is empty") //Array is empty
}

const emplyObj = {}
if(Object.keys(emplyObj).length ===0){
    console.log("Object is empty") //Object is empty
}

console.log(false == 0) //true
console.log(false == '') //true
console.log(0 == '') //true

let var1;
var1 = 5 ?? 6
console.log(var1) //5

let var2;
var2 = null ?? 6
console.log(var2) //6

let var3;
var3 = 5 ?? 6 ?? 7
console.log(var3) //5

let var4;
var4 = undefined ?? 6 
console.log(var4) // 6

const iceTeaPrice = 100
iceTeaPrice <= 80 ? console.log("Less than 80") : console.log("More then 80")