
const promise1 = new Promise(function(resolve, reject){

    //Do an async task
    // Db calls cryptography network
    setTimeout(function(){
        console.log('Async task is compelete')
        resolve()
    }, 1000)
})

promise1.then(function(){
    console.log("Promise Consumed")

})

new Promise(function(resolve,reject){
    setTimeout(function(){
        console.log('Async task 2')
        resolve()
    },1000)
}).then(function(){
    console.log("Async 2 resolve")
})

const promise3 = new Promise(function(resolve,reject){
    setTimeout(function(){
        resolve({username : "Chai",email : "chai@example.com"})
    },1000)
})
promise3.then(function(user){
    console.log(user)
})

const promise4 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = false
        if(!error){
            resolve({username : "Shubham",password : "123"})
        }else{
            reject('ERROR: Something went wrong')
        }
    },1000)
})

promise4
.then((user) =>{
    console.log(user)
    return user.username 
})
.then((username)=>{
    console.log(username)
})
.catch(function(error){
    console.log(error)
})
.finally(() => console.log("The promiss is either resolved or rejected"))

const promis5 = new Promise(function(resolve,reject){
    setTimeout(function(){
        let error = true
        if(!error){
            resolve({username : "Shubham",password : "123"})
        }else{
            reject('ERROR: js went wrong')
        }
    },1000)
})

async function cunsumePromis5(){
    try{
        const response = await promis5
        console.log(response)
    }catch(err){
        console.log(err)
    }
} 

cunsumePromis5()

// async function getAllUser() {
//     try{
//         const response = await fetch('https://jsonplaceholder.typicode.com/users')
//         const data = await response.json()
//         console.log(data)
//     }catch (error){
//         console.log('E: ',error)
//     }
// }
// getAllUser()

fetch('https://jsonplaceholder.typicode.com/users')
.then((response) =>{
    return response.json()
})
.then((data)=>{
    console.log(data)
})
.catch((error)=> console.log(error))
