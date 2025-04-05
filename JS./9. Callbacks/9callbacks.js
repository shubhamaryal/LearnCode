// callback - a function that is passed as an argument to another function.
// when you are done, call this....... euta fun skiyesi arko call grxa .... ek paxi ako kam 
// function ko argument ma arko function pass grney 

hello(bye); /* normal function pass grda jsto () chai add grnu hudena 2nd 
            function ma i.e. argument function ma chai () use grnu vyena or 
            error aayuxa */

function hello(callback){
    console.log("hi");
    callback();
}

function bye(){
    console.log("bye");
}

/* ----- */

sum(page,1,2);

function sum(callback,x,y){
    let result=x+y;
    callback(result);
}

/*
function display(result){
    console.log(result);
}
*/

function page(result){
    document.getElementById("a").textContent = result;
}