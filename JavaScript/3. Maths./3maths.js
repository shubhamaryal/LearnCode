let a=Math.PI; //C ma maths.h use grera PI ko value assign grye jstai ho 
console.log(a);

// console.log(Math.PI);

let x=3.61;
let y=4;
let b= -45;
let z,w,q,p,o,i,u,t,r,e;

z=Math.round(x); //normal hamro type ko round 
console.log(z); 

w=Math.floor(x); //always round down
console.log(w); 

q=Math.ceil(x); //always round up
console.log(q);

p=Math.trunc(x); //removes decimals
console.log(p); 

o=Math.pow(x,y); //power [just like the C]
console.log(o); 

i=Math.sqrt(y); //square root 
console.log(i);

u=Math.sin(b); //sin cose tan ko hunxa .sin .cos .tan respectively
console.log(u);

t=Math.abs(b); //gives posotive value , modulus ko kam grxa
console.log(t); 

r=Math.sign(b); //+ve -ve check grna use hunxa 
e=Math.sign(x);
console.log(r);
console.log(e);

let max=Math.max(x,y,b); //for maximum value 
console.log(max);

let min=Math.min(x,y,b); //for minimum value
console.log(min);

let random=Math.floor(Math.random()*8)+2; //works in 1 digit but arko lagi halka diff hunxa jun tala xa 
                                          //floor ley decimal hatairaxa
                                          // *8 vnya max number
                                          // min number 0 hunxa so min number 2 garauna lai +2 xa
console.log(random);

let maxnum=100;
let minnum=50;
let randomnumber=Math.floor(Math.random()*(maxnum-minnum))+minnum; 
console.log(randomnumber);