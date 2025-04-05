const myBox= document.getElementById("mybox");
const button= document.getElementById("button");


button.addEventListener("click",event=>{
    myBox.style.backgroundColor="red";
    myBox.textContent="Hi";
}); 

button.addEventListener("mouseover",event=>{
    myBox.style.backgroundColor="yellow";
    myBox.textContent="Go ahead";
}); 

button.addEventListener("mouseout",event=>{
    myBox.style.backgroundColor="lightgreen";
    myBox.textContent="Click Me";
}); 