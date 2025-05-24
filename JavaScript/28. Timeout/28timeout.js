/* ----- SETTIMEOUT ----- */

function fun1(){
    console.log(`3sec delay`);
}

setTimeout(fun1,3000);

//

setTimeout(function(){
    console.log(`5sec delay`);
}, 5000);

//

setTimeout(()=>console.log(`7sec delay`),7000);


/* ----- CLEARTIMEOUT ----- */

const no = setTimeout(()=>console.log(`2sec delay`),2000);

clearTimeout(no); /* this wont let that settimeout trigger, but is this is 
                    removed then the timeout works */



/* USING HTML AND TESTING BOTH FOR CLEAR CONCEPTS */

let stopAlert;

function setTimer(){
    stopAlert = setTimeout(()=>window.alert(`This was delay 3sec after the click`),3000);
}

function offTimer(){
    clearTimeout(stopAlert);
}