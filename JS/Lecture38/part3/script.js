
let color 
document.getElementById('start').addEventListener('click',function(){
    if(!color){
        color = setInterval(function(){
            document.querySelector('body').style.backgroundColor = '#'+(Math.random()*1000000).toFixed()
        },1000)
    }
})
document.getElementById('stop').addEventListener('click',function(){
    clearInterval(color)
    color = null
})