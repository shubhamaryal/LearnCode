/* ----- User input ----- */

let username;

document.getElementById("mySubmit").onclick = function(){
    username= document.getElementById("myText").value;
    //console.log(username);
    document.getElementById("myh1").textContent=`Hello ${username}`;
}


/* ----- Type Conversion ----- */
 
// let age= window.prompt(" what is your age? ");
// age= Number(age); // yo grena vne chai string jasari kam grthiyo ani last ma 1 tasinthiyo add hunthiyena 
// age+=1;
// console.log(age);

/* ----- Constant ----- */

const pi = 3.14159; //const vyesi chai change hudena value
let radius;
let circumference;

circumference=2*pi*radius;
document.getElementById("mySubmit2").onclick=function(){
    radius= document.getElementById("myRadius").value;
    circumference =2*pi*radius;
    document.getElementById("myh2").textContent= circumference + "cm";
}

