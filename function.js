//variable declared outside outside any function or block are in the global scope
//they are accessible anywhere in the script
//only accessible in the function in which they are declared
let x=20;

function sendMessage(){
    let x=10;
    console.log("hello world");
    console.log(x)//inside
}
sendMessage()
console.log(x);
console.log("Mohamed Fouzhan M");
//block scope
//the block scope of variable means that the variable is accessible within the block that is between the curly braces

function Check(){
    if(true){
        let name="Webdevelopment";
        var iscloudy=true;
        console.log(name);
        console.log(iscloudy)
    }
}
Check()
//variable declared outside any funcion
//call back function in JS is afunction that is passed as an argument to another function,and it is executed after the completion of that function\
//it is commonly used for:
//handling asynchronous operations(eg: API,server)
function first(){
    console.log("this is my first function")
}
function second(callback){
    console.log("this is my second function")
    setTimeout(callback,2000)
}
second(first)

let count=0
let Input=()=>{
    count++
    console.log(count);
    if(count<5){
        Input()
    }
}
Input()