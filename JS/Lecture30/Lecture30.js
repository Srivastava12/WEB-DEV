const coding = ['js','ruby','java','python','cpp']

// const values = coding.forEach((item) =>{
//     console.log(item)
// })
// console.log(values)
/*
js
ruby
java
python
cpp
undefined
*/

const myNums = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNums = myNums.filter( (num) => num > 5)
// console.log(newNums) // [6, 7, 8, 9, 10]

// const newNums = myNums.filter( (num) => {
//     return num > 4
// })
// console.log(newNums) // [5, 6, 7, 8, 9, 10]

// const newNums = []
// myNums.forEach((num) => {
//     if(num > 4){
//         newNums.push(num)
//     }
// })
// console.log(newNums) // [5, 6, 7, 8, 9, 10]

const books = [
    { title: "The Silent Patient", genre: "Memoir", publishDate: "2019" },
    { title: "Where the Crawdads Sing", genre: "Mystery", publishDate: "2018" },
    { title: "Atomic Habits", genre: "Memoir", publishDate: "2018" },
    { title: "The Midnight Library", genre: "History", publishDate: "2020" },
    { title: "Dune", genre: "Mystery", publishDate: "1965" },
    { title: "The Alchemist", genre: "Mystery", publishDate: "1988" },
    { title: "Sapiens", genre: "History", publishDate: "2011" },
    { title: "Educated", genre: "Memoir", publishDate: "2018" },
    { title: "To Kill a Mockingbird", genre: "Classic", publishDate: "1960" },
    { title: "The Great Gatsby", genre: "Classic", publishDate: "1925" }
];
  
// const userBooks = books.filter( (bk) => bk.genre === 'Memoir')
// console.log(userBooks) 
/*
0 : {title: 'The Silent Patient', genre: 'Memoir', publishDate: '2019'}
1 : {title: 'Atomic Habits', genre: 'Memoir', publishDate: '2018'}
2 : {title: 'Educated', genre: 'Memoir', publishDate: '2018'}
*/

// const userBooks1 = books.filter((bk) => { return bk.publishDate >= 2000 }) 
// console.log(userBooks1)
/*
0 : {title: 'The Silent Patient', genre: 'Memoir', publishDate: '2019'}
1 : {title: 'Where the Crawdads Sing', genre: 'Mystery', publishDate: '2018'}
2 : {title: 'Atomic Habits', genre: 'Memoir', publishDate: '2018'}
3 : {title: 'The Midnight Library', genre: 'History', publishDate: '2020'}
4 : {title: 'Sapiens', genre: 'History', publishDate: '2011'}
5 : {title: 'Educated', genre: 'Memoir', publishDate: '2018'}
*/

const myNumbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
// const newNumber = myNumbers.map( (num) => num + 10)
// console.log(newNumber) //[11, 12, 13, 14, 15, 16, 17, 18, 19, 20]

// const newNumss = myNumbers
// .map( (num)=> num * 10)
// .map( (num) => num+1)
// .filter( (num)=> num >= 41)
// console.log(newNumss)//[41, 51, 61, 71, 81, 91, 101]
 
const myNums1 = [1,2,3]

// const total = myNums1.reduce(function(acc,curr){
//     console.log(`acc :${acc} and crr ${curr}`)
//     return acc + curr
// },2)
// console.log(total)
/*
    acc :2 and crr 1
    acc :3 and crr 2
    acc :5 and crr 3
*/
// const total = myNums1.reduce( (acc, curr) => acc+curr,0)
// console.log(total) // 6

const shoppingCart = [
    {
        itemName : "js Course",
        price : 2999
    },
    {
        itemName : "py Course",
        price : 999
    },
    {
        itemName : "mobile dev Course",
        price : 5999
    },
    {
        itemName : "data science Course",
        price : 12999
    }
]
const priceToPay = shoppingCart.reduce( (acc , item) => acc  + item.price,0 )
console.log(priceToPay)
