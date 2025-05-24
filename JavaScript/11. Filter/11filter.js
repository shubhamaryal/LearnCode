// .filter() = Creates a new array by filtering out the elements 

let number = [1,2,3,4,5,6,7];

let even = number.filter(checkEven); 
let odd= number.filter(checkOdd);



console.log(even);
console.log(odd);

function checkEven(element){
    return element%2===0;
}

function checkOdd(element){
    return element%2!==0;
}

/*-----*/

const ages=[16, 17 ,44 ,23, 19,90,1,3,7,11];

const adult = ages.filter(checkAdult);
const child = ages.filter(checkChild);

console.log(adult);
console.log(child);

function checkAdult(element){
    return element>=18;
}

function checkChild(element){
    return element<18;
}

/*-----*/

const fruits= ["apple","banana","mango","litchi","pineapple","papaya"];

const shortName = fruits.filter(chechShort);
const longName = fruits.filter(chechLong);

console.log(shortName);
console.log(longName);

function chechShort(element){
    return element.length <=5;
}

function chechLong(element){
    return element.length >5;
}
