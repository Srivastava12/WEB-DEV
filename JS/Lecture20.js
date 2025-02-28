
// function calculateCartPrice(...num1){
//     return num1
// }
// console.log(calculateCartPrice(1, 2, 3, 4, 5)) //[1, 2, 3, 4, 5]

function calculateCartPrice2(var1,var2,...num1){
    return num1
}
console.log(calculateCartPrice2(1, 2, 3, 4, 5)) //[3, 4, 5]

const user = {
    userName : "Shubham",
    price : "599"
}
function handleObject(anyobject){
    console.log(`UserName is ${anyobject.userName} and price is ${anyobject.price}`)
}
handleObject(user) //UserName is Shubham and price is 599
handleObject({
    userName :"Sam",
    price: 399
}) //UserName is Sam and price is 399

const myNewArrya = [200, 400 , 100, 600]

function returnSecondValue(getArray){
    return getArray[1]
}

console.log(returnSecondValue(myNewArrya))
console.log(returnSecondValue([500, 300, 700]))