let fruits=["apple","banana","mango"];

console.log(fruits);
console.log(fruits[0]);
console.log(fruits[1]);
console.log(fruits[2]);
console.log(fruits[3]); // yesari sabai ni milxa output or specific ni milxa

fruits[1]="orange"; 
console.log(fruits[2]); // array ma update ni grna milxa

fruits[3]="kiwi";
console.log(fruits[3]); // 3 ma kei xaina tara yesari add ni grnu milxa 

console.log("----------------");

console.log(fruits); 

fruits.pop();
console.log(fruits); // last ko element hatauxa pop le 

fruits.push("push");
console.log(fruits); // push ley last ma add grxa 

fruits.shift();
console.log(fruits); // aagadi ko hatauxa 


fruits.unshift("unshift");
console.log(fruits); // aagadi add grxa 

console.log("----------------");

let num=fruits.length;
console.log(num); // number of array

let index= fruits.indexOf("mango");
console.log(index); //kati number ma xa herna lai 

let index2= fruits.indexOf("papaya");
console.log(index2); // navako index ko element -1 aayuxa 

console.log("----------------");

let array=["a","b","c"]

for (let i=0;i<array.length; i++){
    console.log(array[i]);
}

let meats=["fish","chicken","goat"]

for (let meat of meats){
    console.log(meat);
}

console.log("----------------");

meats.sort(); // alphabetical order ma sort
for (let meat of meats){
    console.log(meat);
}

console.log("----------------");

meats.sort().reverse(); // ulto order ma sort
for (let meat of meats){
    console.log(meat);
}

console.log("----------------");

/* ----- Spread Operator ----- */
// ... vneko spread operator ho ani it unpack[xutauxa] arrays and strings 

let numbers=[1,2,3,4,5];
let max = Math.max(...numbers); 
let min=Math.min(...numbers);
console.log(max);
console.log(min);

let username="Shubham";
console.log(username);
let letters=[...username];
console.log(letters); // xutayera print grxa 

let letters2=[...username].join("-");
console.log(letters2);

console.log("----------------");

let copy= ["aa","bb","cc"];
let ncopy=[...copy];
console.log(ncopy); //same print grxa  

let a1=["s","h","u"];
let a2=["b","h","a"];
let n1= [...a1,...a2]; // 2 ta array add ni grna milxa 
console.log(n1);
let n2= [...a1,...a2, "m"]; // aru kura add grni milxa 
console.log(n2);