/* ----- Basics ----- */

console.log(`hello`);
console.log(`i like momo`);

window.alert(`alert`);

document.getElementById("a").textContent=`hello`;
document.getElementById("b").textContent=` i like momo`;


/* ----- Variables ----- */

let x; 
x=123; 
console.log(x);
console.log(`x`);
// ` ` use gryo vne chai tei hunxa but use grena vne tesko value hunxa

let agee=18;
console.log(`I'm ${agee} year old`);
console.log(typeof agee);

let name="Shubham";
console.log(name);
console.log(`My name is ${name}`);
console.log(typeof name);

let on=true;
console.log(typeof on);
console.log(on);
console.log(`Shubhma is online :${on}`);

let fullname="Shubham Aryal";
let age=18;
let student=true;
document.getElementById("p1").textContent= `my name is ${fullname}`;
document.getElementById("p2").textContent= `im ${age} years old`
document.getElementById("p3").textContent= `im a student: ${student}`;

let username;
username= window.prompt("type the username");
console.log(username);