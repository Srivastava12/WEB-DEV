const accountID=144553

// We can define variable by let and const in js but with letest js update we avoid  var 

let accountEmail = "shubham@gmail.com"

var accountPassword = "12345"
/*
    Prefer not to use var bacouse of issue in block scope and functional scop 
 */

accountCity = "Greater Noida"//it is posible in js but it is not a good way to create a variable

let accountState; //UnDefine 

// accountID = 2  //Can not re-assigan becousse it is a const variable
console.log(accountID);

console.log(accountEmail)
accountEmail = "shubham9576@gmail.com"
console.log(accountEmail)

console.log(accountPassword)
accountPassword = "54321"
console.log(accountPassword)

console.log(accountCity)

console.table([accountID,accountEmail,accountPassword,accountCity])

console.log(accountState)
