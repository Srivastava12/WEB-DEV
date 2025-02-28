const box = document.querySelector('.orange')
setInterval(function(){
    let dt = new Date()
    box.innerHTML = dt.toLocaleTimeString()
},1000)