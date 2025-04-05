/*
    arrow function = a concise way to write function expressions good for smiple
                     functions hat you use only once 

    SYNTAX : (parameters) => some code
*/

const example = () => console.log(`This is arrow function`);

example(); 

// -----

const info =(name,age) => {console.log(`Hello ${name}`)
                            console.log(`I'm ${age} years old.`)};

info ("Shubham", 18);

// -----

/*
    setTimeout(hello,3000);

    function hello(){
        console.log("helllo1");
    }

    setTimeout( function(){
        console.log("helllo2");
    },3000);
*/

setTimeout(()=>console.log("hello"),3000);

// -----

const numbers = [1,2,3,4,5,6];

const square = numbers.map((elements)=>(Math.pow(elements,2)));
const cube = numbers.map((elements)=>(Math.pow(elements,3)));
const even=numbers.filter((elements)=> (elements%2===0));
const odd=numbers.filter((elements)=> (elements%2!==0));
const total=numbers.reduce((accumulator,elements)=>accumulator+elements);

console.log(square);
console.log(cube);
console.log(even);
console.log(odd);
console.log(total);