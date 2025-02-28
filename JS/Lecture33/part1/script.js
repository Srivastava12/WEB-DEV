
const parent=document.querySelector('.parent')
// console.log(parent)
// console.log(parent.children)
// console.log(parent.children[1].innerHTML)

for (let index = 0; index < parent.children.length; index++) {
    console.log(parent.children[index].innerHTML)
}
parent.children[1].style.color = "orange"
// console.log(parent.firstElementChild)
// console.log(parent.lastElementChild)

const day1 = document.querySelector('.day')
// console.log(day1)
// console.log(day1.parentElement)
// console.log(day1.nextElementSibling)

console.log("NODES: ",parent.childNodes)