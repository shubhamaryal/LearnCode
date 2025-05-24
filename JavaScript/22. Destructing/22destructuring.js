/*
    destructuring - extract values from arrays and objects, then ssign them to variable in
                    convient way

    [] - to perfrom array destructuring  
    {} - to perfrom object destructuring
*/

// SWAP THE VALUE OF 2 VARIABLE

let a=1;
let b=2;

[a,b]=[b,a]; // destructuring = array

console.log(a);
console.log(a);


// SWAP 2 ELEMENTS IN ARRAY

const color = ["red","green","yellow","white","black"];

[color[0],color[4]]=[color[4],color[0]];

console.log(color);


// ASSIGN ARRAY ELEMTS TO VARIABLES

const color2 = ["red","green","yellow","white","black"]; 

const [first, second, third, ...extra] = color2; /* ... ley baki vako sabai lai array ma 
                                                    rakhdinxa, it is called 
                                                    restparameters. [...] */

console.log(first);
console.log(second);
console.log(third);
console.log(extra);


// EXTRACT VALUES FROM OBJECTS

const person1={
    firstname : "naruto",
    lastname : "uzumaki",
    age : 21,
    job : "hokage",
}

const person2={
    firstname : "minato",
    lastname : "uzumaki",
    age : 30,
}

const {firstname,lastname,age,job="dead"} = person2;

console.log(firstname);
console.log(lastname);
console.log(age);
console.log(job);


// DESTRUCTURE IN FUNCTION PARAMETERS

function displayPerson({firstName,lastName,Age,Job="dunots"}){
    console.log (`name:${firstName} ${lastName}`);
    console.log(`age : ${Age}`);
    console.log (`job :${Job}`);
}
const person3={
    firstName:"monkey.d.",
    lastName:"luffy",
    Age:21,
    Job:"pirate",
}

const person4={
    firstName:"portgas.d.",
    lastName:"ace",
    Age:21,
}

displayPerson(person3);
displayPerson(person4);