
let rendomNumber = parseInt(Math.random() * 100+1)
const submit = document.querySelector('#button')
const preguess = document.querySelector('#preguess')
const numAttend = document.querySelector('#numAttend')
const result = document.querySelector("#result")

let attemd = 10
let gameStetus = true

if(gameStetus){
    submit.addEventListener('click',function(e){
        e.preventDefault()
        const input = parseInt(document.querySelector('input').value)
        --attemd
        console.log(attemd)
        if(attemd >0){
            updateAttemd()
            if(validateGuess(input)){
                updateAttemd()
                checkGuess(input)
            }
        }else{
            end("You are out of Gamesses remaining ! do you want to paly again ?")
        }
        document.querySelector('#input').value=' '
    })
}
function updatePrevious(num){
    preguess.innerHTML += `${num},`
}
function updateAttemd(){
    numAttend.innerHTML = attemd
}
function validateGuess(num){
    if(isNaN(num))
        display("Please Enter a valid number !")
    else if(num > 100)
        display("Please Enter number less-then 100")
    else if(num < 1)
        display("Plesase Enter number greate then 1")
    else
        return true
}

function checkGuess(num){
    if(rendomNumber > num){
        display("Guess number is less of actual number")
        updatePrevious(num)
    }
    else if(rendomNumber < num){
        display("Guess number is height of actual number")
        updatePrevious(num)
    }
    else{
        end("Guess Number is equals of current number ! You win")
    }
}

function display(msg){
    result.innerHTML = msg
}

function end(msg){
    numAttend.innerHTML = ' '
    preguess.innerHTML = ' '
    // document.querySelector('#input').setAttribute('disabled','')
    display(msg)
    start()
}

function start(){
    const restart = document.querySelector('#restart')
    restart.value = 'click me to start again game'
    restart.addEventListener('click',function(e){
        rendomNumber = parseInt(Math.random() * 100+1)
        e.preventDefault()
        restart.value = " "
        attemd =10
        display(" ")
        // document.querySelector('#input').removeAttribute('disable','')
    })
}