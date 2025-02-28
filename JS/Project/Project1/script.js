const main = document.querySelector('.main')
const box = document.querySelectorAll('.class')

box.forEach(function (box){
    box.addEventListener('click',function (e){
        console.log()
        const color = e.target.color
        main.style.backgroundColor=`${e.target.id}`
    })
});