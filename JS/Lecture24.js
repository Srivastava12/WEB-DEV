// Immediately Invoked Function Expressions (IIFE)

//()()
//(function-Defination)(Function-call)

(function chai(){
    //Named IIFE
    console.log(`DB CONNECTED`)
})();// here function invoc but function dont now where have to stop the invocation that's why we have to use ';' for stop the invocation other wise if we will be write any code after that the iife function invocation those code will be generate the error

(()=>{
    //Simple IIFE
    console.log(`DB CONNECTED TWO`)
})();

((name)=>{
    console.log(`DB CONNECTED with ${name}`)
})("Shubham")