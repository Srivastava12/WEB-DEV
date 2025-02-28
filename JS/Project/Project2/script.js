const form = document.querySelector("form")

form.addEventListener('submit',function(e){
    e.preventDefault()

    const result = document.querySelector('#result')

    const height = parseInt(document.querySelector('#height').value)
    const weight = parseInt(document.querySelector('#weight').value)
    
    if( height < 1 || height === '' || isNaN(height))
        result.innerHTML = `please give a valid height ${height}`
    else if( weight < 1 || weight === '' || isNaN(weight))
        result.innerHTML = `please give a valid weight ${weight}`
    else
        result.innerHTML = "BMI is :- "+( weight / (( height * height ) / 10000)).toFixed(3)
})



