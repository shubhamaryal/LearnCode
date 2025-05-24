/* 
    function declaration = define a reuseable block of code that
                           performs a specific task 
                           [ normally declare grye jstai ho ]
*/

/* 
    function hello(){
        console.log("hello");
    }
*/

/*
    function expression = a way to define function as values or variables
*/

// normal function lai value jasari halnu milxa

const hello = function(){
    console.log("hello");
}

hello();

// js function lai nai argument ma pass grna milxa

function hi(){
    console.log("this is 3sec late");
}

setTimeout(hi,3000); // 3 sec paxi display hunxa 

setTimeout(function(){
    console.log("this is 5sec late");
},5000); // purai function of cmd lai argument ma pass gryeko

// ------------

const numbers = [1,2,3,4,5,6];

const squares=numbers.map(function(element){
    return Math.pow(element,2);
});

console.log(squares);

//

const divisible=numbers.filter(function(element){
    return element%2===0;
});

console.log(divisible);

//

const total = numbers.reduce(function(a,b){
    return a+b;
});

console.log(total);