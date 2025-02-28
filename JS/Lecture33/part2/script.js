
const div = document.createElement('div')
console.log(div)
div.className = "main"
div.id = 'myId'
div.setAttribute("title","generated title")
div.style.backgroundColor = "green" 
div.style.padding = "12px"
// div.innerText = "JavaScript"
const addText = document.createTextNode("JavaScript")
div.appendChild(addText)

document.body.appendChild(div)