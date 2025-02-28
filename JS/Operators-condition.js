// operators

let ans=5
ans*=5;
console.log(ans)

console.log(~ans)
console.log(~(~ans))

//Condition

let age=18
let number=4
if(number===1)
    console.log("1")
else
    console.log("4")

if(number===2)
    console.log("1")
else
if(number===3)
    console.log("3")
else
if(number===4)
    console.log("4")
else
    console.log("Wrong Number")

switch(age){
    case 1:
        console.log("1")
    break
    case 2:
        console.log("2")
    break
    case 3:
        console.log("3")
    break
    case 18:
        console.log("You can vort")
    break
    default :
    console.log("You are not eligible for vorting")
}