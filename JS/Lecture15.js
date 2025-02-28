const marvel_heros = ["thor","Ironman","spiderman"]
const dc_heros = ["superman","flash","batman"]

// marvel_heros.push(dc_heros)
// console.log(marvel_heros)
// console.log(marvel_heros[3][1])//flash

// const allHeros = marvel_heros.concat(dc_heros)
// console.log(allHeros)//['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// const allNewHeros = [...marvel_heros,...dc_heros]
// console.log(allNewHeros) // ['thor', 'Ironman', 'spiderman', 'superman', 'flash', 'batman']

// const anotherArray = [1, 2, 3, [4, 5, 6], 7,[6, 7,[4, 5]]]
// const realAnotherArray = anotherArray.flat(Infinity)
// console.log(realAnotherArray) //[1, 2, 3, 4, 5, 6, 7, 6, 7, 4, 5]

console.log(Array.isArray("shubham"))
console.log(Array.from("shubham"))
console.log(Array.from({name: "shubham"})) 

let score1 = 100 //false
let score2 = 200 //['s', 'h', 'u', 'b', 'h', 'a', 'm']
let score3 = 300 //[]

console.log(Array.of(score1,score2,score3)) //[100, 200, 300]
