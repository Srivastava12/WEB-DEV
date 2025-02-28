
function sayMyName(){
    console.log("S")
    console.log("H")
    console.log("U")
    console.log("B")
    console.log("H")
    console.log("A")
    console.log("M")
}
// sayMyName()

// function addTwoNumbers(number1, number2){
//     console.log(number1+number2)
// }
// addTwoNumbers(3+"3") //33
// addTwoNumbers(3,null) // 3
// const result = addTwoNumbers(3, 5)
// console.log("Result :", result) //Result : undefined

// function add2Numbers(num1,num2){
//     return num1+num2
// }
// console.log(add2Numbers(5,6)) //11

function loginUserMessage(username){
    return `${username} just logged in`
}
// console.log(loginUserMessage("Shubham")) //Shubham just logged in

// console.log(loginUserMessage())//undefined just logged in

// function loginUserMessage2(username){
//     // if(username === undefined){
//     //     console.log("please pass any value as an argument")
//     //     return
//     // }
//      if(! username){
//         console.log("please pass any value as an argument")
//         return
//     }
//     return `${username} just logged in`
// }
// loginUserMessage2()//please pass any value as an argument

function loginUserMessage3(username="USER"){
    return `${username} just logged in`
}
console.log(loginUserMessage3())//USER just logged in
console.log(loginUserMessage3("Shubham")) // Shubham just logged in
