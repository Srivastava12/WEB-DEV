// Nested Scope 

function one(){
    const userName = "Shubham"
    function two(){
        const website = "youtube"
        console.log(userName)
    }
    // console.log(website) // website is not defined
    two()
}
// one()

if(true){
    const userName = "Shubham"
    if(userName === "Shubham"){
        const website = " youtube"
        // console.log(userName + website) // Shubham
    }
    // console.log(website) //website  is not defined
}
// console.log(userName) // userName is not defined

// interesting

console.log(addOne(5)) //6
function addOne(num){
    return num+1
}

// console.log(addTwo(5)) //Cannot access 'addTwo' before initialization (That is a hosting problem)
const addTwo = function(num){
    return num + 2
}