
//var c = 300
let a = 300
if(true){
    let a =10
    const b =20
    var c =30
    console.log("Inner : ",a) //Inner : 10
}
console.log(a) //300
// console.log(b) //Error
console.log(c) //30