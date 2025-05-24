const myButton = document.getElementById("myButton");


myButton.classList.add("enabled"); /* this adds the css class in the button */

/* to remove the class */

/*
    myButton.classList.remove("enabled");
*/

myButton.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
});

myButton.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover");
});



/*
    toggle chai tei add ra remove sngai use grni wala ho
*/

/*
    event.target. nalekhyera sidai k ma apply grni ho tyo ni lekhna milxa
    eg. tyo event.target. ko satto sidai myButton lekhyeni kei hudena
    same nai effect hunxa button ma
*/

myButton.addEventListener("click",event=>{

    if(event.target.classList.contains("disabled")){
        event.target.textContent += "NO";
    }
    else{
        event.target.classList.replace("enabled","disabled");
    }

   
});

/*
    Sytax of replace:
    replace(oldclass, new class) 
*/

/*
    contains retuyrn true if the class exists else it returns false if the
    class doesnot exist
*/

/*
    we can reuse the same css for other html elements too
*/

const myH1 = document.getElementById("myH1");

myH1.addEventListener("mouseover",event=>{
    event.target.classList.add("hover");
});

myH1.addEventListener("mouseout",event=>{
    event.target.classList.remove("hover");
});