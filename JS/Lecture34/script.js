
function addLenguage(langName){
    const li = document.createElement("li")
    li.innerHTML = `${langName}`
    document.querySelector('.lenguage').appendChild(li)
}
addLenguage("python")
addLenguage("typescript")

function addOptiLanguage(langName){
    const li = document.createElement("li")
    li.appendChild(document.createTextNode(langName))
    document.querySelector('.lenguage').appendChild(li)
}
addOptiLanguage('golang')

//Edit
const secendLang = document.querySelector("li:nth-child(2)")
//secendLang.innerHTML = "Mojo"
const newli = document.createElement('li')
newli.textContent = "Mojo"
secendLang.replaceWith(newli)

//Edit
const firstLang = document.querySelector("li:first-child")
firstLang.outerHTML = "<li>TypeScript</li>"

//remove
const lastLang = document.querySelector("li:last-child")
lastLang.remove()
