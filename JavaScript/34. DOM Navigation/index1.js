// .parentElements

const element = document.getElementById("carrots");
const parent = element.parentElement;

parent.style.backgroundColor = "red";


// .children

const elementt =  document.getElementById("fruits");
const child = elementt.children;

child[1].style.textAlign = "center"; 

Array.from(child).forEach(child =>{
    child.style.backgroundColor ="pink";
})



/*
    parent bata child access grda child dherai huna skxa so tyo array 
    ko form ma basya hunxa but array method use grnu chai mildaina so 
    need so use "Array." before using array methods i.e. for each
*/