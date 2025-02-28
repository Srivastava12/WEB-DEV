// Dates

let myDate = new Date()

/*
console.log(typeof myDate) //object
console.log(myDate) //Wed Feb 12 2025 16:33:32 GMT+0530 (India Standard Time)
console.log(myDate.toString()) //Wed Feb 12 2025 16:33:32 GMT+0530 (India Standard Time)
console.log(myDate.toDateString()) //Wed Feb 12 2025
console.log(myDate.toISOString()) //2025-02-12T11:03:32.131Z
console.log(myDate.toJSON()) //2025-02-12T11:03:32.131Z
console.log(myDate.toLocaleDateString()) //2/12/2025
console.log(myDate.toLocaleString()) //2/12/2025, 4:33:32 PM
console.log(myDate.toLocaleTimeString) //ƒ toLocaleTimeString()
*/

// let myCreatedDate = new Date(2023, 0, 23)
// console.log(myCreatedDate) //Mon Jan 23 2023 00:00:00 GMT+0530

// let myCreatedDate1 = new Date(2023, 0, 23, 5, 3)
// console.log(myCreatedDate1.toLocaleString()) //1/23/2023, 5:03:00 AM

// let myCreatedDate2 = new Date("2023-01-14")
// console.log(myCreatedDate2.toLocaleString()) //1/14/2023, 5:30:00 AM

// let myCreatedDate3 = new Date("01-14-2023")
// console.log(myCreatedDate3.toLocaleString()) //1/14/2023, 12:00:00 AM

// let myTimeStamp = Date.now()

// console.log(myTimeStamp)
// console.log(myCreatedDate3.getTime())
// console.log(Math.floor(Date.now()/1000))

let newDate = new Date()
console.log(newDate)
console.log(newDate.getMonth()+1)
console.log(newDate.getDay())

console.log(newDate.toLocaleString('default',{
    weekday:"long",
}))