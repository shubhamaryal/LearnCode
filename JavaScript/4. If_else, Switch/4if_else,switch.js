const age = document.getElementById("age");
const button = document.getElementById("button");
const result =document.getElementById("result");
let agee;

button.onclick=function(){
    agee= age.value;
    agee= Number(agee);

    if (agee >= 18){
        result.textContent =` you are 18+`;
    }
    else{
        result.textContent =` you are 18-`;
    }
}

/* ----- Checked function ----- */

const sub= document.getElementById("sub");
const e= document.getElementById("e");
const k= document.getElementById("k");
const b= document.getElementById("b");
const hsub= document.getElementById("hsub");
const hpayment= document.getElementById("hpayment");
const submit =  document.getElementById("submit");

submit.onclick=function(){
    if (sub.checked){
        hsub.textContent =`You are subscribed`;
    }
    else{
        hsub.textContent =` You are not subscribed`;
    }

    if (e.checked){
        hpayment.textContent=`Your payment method is eSewa`;
    }
    else if (k.checked){
        hpayment.textContent=`Your payment method is Khalti`;
    }
    else if (b.checked){
        hpayment.textContent=`Your payment method is Bank`;
    }
    else{
        hpayment.textContent=`Please select an payment method`;
    }
}



/* ----- Ternary Operator ----- */

let time=9;
let gretting = time<12? "G.M.!" : "G.F.!";
console.log(gretting);

let student=true;
let message = student? "Yes" : "No";
console.log(message);



/* ----- Switch ----- */

let day=2;

switch(day){
    case 1:
        console.log("sunday");
        break;
    case 2:
        console.log("monday");
        break;
    case 3:
        console.log("tuesday");
        break;
    case 4:
        console.log("wedneesday");
        break;
    case 5:
        console.log("thursday");
        break;
    case 6:
        console.log("friday");
        break;
    case 7:
        console.log("saturday");
        break;
    default:
        console.log("Wrong day");
}


let marks= 66;
let grade;

switch(true){  //switch cant perform conditional expressions [>,>=,<=,<] so true use grnu prxa.
    case marks >= 90:
        grade="A+";
        break;
    case marks >= 80:
        grade="A";
        break;
    case marks >= 70:
        grade="B+";
        break;
    case marks >= 60:
        grade="B";
        break;
    case marks >= 50:
        grade="C+";
        break;
    case marks >= 40:
        grade="C";
        break;
    default:
        grade= "F";
}

console.log(grade);