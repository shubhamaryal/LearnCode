const food1="pizza";
const food2="burger";
const food3="momo";
const food4="sushi";
const food5="ramen";

function openFridge(...foods){
    console.log(...foods);
}

openFridge(food1,food2,food3,food4,food5);

/* ----- */

function getFood(...foods){
    return foods;
}

const foods = getFood(food1,food2,food3,food4,food5);
console.log (foods); 

/* ----- */

function sum(...numbers){
    let result =0;
    
    for(let number of numbers){
        result+=number;
    }
    return result;
}

const total =sum(1,2,3,4);
console.log(`Your total is ${total}`); /* rest paramter taba use hunxa jaba 
                                       kati ota input aayuxa tyo hamlai thahudena */

/* ----- */

function combine(...string){
    return string.join(" ");
}

const name=combine("shubham", "aryal");
console.log(name);