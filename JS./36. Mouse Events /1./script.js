const myBox= document.getElementById("mybox");

function changeColor(event){
    event.target.style.backgroundColor="red";
    event.target.textContent="Hi";
}

myBox.addEventListener("click",changeColor); 

/* we can use function itself in the argument or use arrow function */

/*
    myBox.addEventListener("click", function(event){
        event.target.style.backgroundColor="red";
        event.target.textContent="Hi";
    });

    myBox.addEventListener("click", even =>{
        event.target.style.backgroundColor="red";
        event.target.textContent="Hi";
    });
*/

myBox.addEventListener("mouseover",event=>{
    event.target.style.backgroundColor="yellow";
    event.target.textContent="Go ahead";
}); 

myBox.addEventListener("mouseout",event=>{
    event.target.style.backgroundColor="lightgreen";
    event.target.textContent="Click Me";
}); 