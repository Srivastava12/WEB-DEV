
// const sayName = function(){
//     console.log("Shubham")
// }

const changeText = function(){
    document.querySelector('h1').innerHTML = "best js series"
}

const changme = setTimeout(changeText,2000)

document.querySelector('#stop').addEventListener('click',function(){
    clearTimeout(changme)
    console.log('clicked')
})