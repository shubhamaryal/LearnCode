function hbd(name, age){
    console.log(`Hbd to you ${name}`);
    console.log(`You are now ${age} years old`);
}

hbd("shubham", 18);

/* ----- */

function add(x,y){
    let result=x+y;
    return result;
}

let answer= add(2,3);
console.log(answer);

//

function sub(x,y){
    return x-y;
}
console.log(sub(4,5));

/* ----- */

function even(num){
    if(num%2===0){
        return "even";
    }
    else{
        return "odd";
    }

    //return num%2===0? "even" : "odd" ; [shortcut use grna milyo, ternary operator bata]
}
 
console.log (even(6));

//

function check(email){
    return email.includes("@") ? true : false;
}

console.log(check("shubham@gmail.com"));
console.log(check("shubhamgmail.com"));