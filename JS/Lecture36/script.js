
// document.getElementById('owl').onclick = function(){
//     alert('owl clicked')
// } //this aproch not good becouse onclick provide some propogetion facelity 

// document.getElementById('owl').addEventListener('click',function(e){
//     alert('owl clicked') //PointerEvent
//     console.log(e)
// },true)// here by default have false value if we pass false then this event will not work 

// Others way to parform operation 
// attachEvent() 
//jQuery - onEventListener

/** e:-
    Event-Propagation
    types :-
    1 -  Event boobling (default value- false) boobling up move down to top
    2 -  Event capturing (it is not default and pass value true for opration) move top to down
*/

// document.getElementById('images').addEventListener('click',function(e){
//     console.log('images clicked')
// })

//Event boobling example :-
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('owl clicked')
// })

// Event capturing example 
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('owl clicked')
// },true)

//stopPropagation 
// document.getElementById('owl').addEventListener('click',function(e){
//     console.log('owl clicked')
//     e.stopPropagation()
// })

// document.getElementById('google').addEventListener('click',function(e){
//     e.preventDefault()
//     e.stopPropagation()
//     console.log('Google clicked')
// },false)

document.querySelector('#images').addEventListener('click',function(e){
    // console.log(e)
    // console.log(e.target.parentNode)
    let removeIt = e.target.parentNode
    // removeIt.remove()
    // removeIt.parentNode.removeChild(removeIt)
    console.log(e.target.tagName)
    if(e.target.tagName === 'IMG'){
       console.log(e.target.id)
       removeIt.remove()
    }
})