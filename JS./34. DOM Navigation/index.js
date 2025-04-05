// .firstElementChild

const element = document.getElementById("fruits");
const firstChild = element.firstElementChild;
firstChild.style.textAlign="right";

const ulElements = document.querySelectorAll("ul");
ulElements.forEach(elements=>{
    const firstChildd= elements.firstElementChild;
    firstChildd.style.backgroundColor = "yellow";
})


// .lastElementChild

const lastChild = element.lastElementChild;
lastChild.style.textAlign="center";

ulElements.forEach(elements=>{
    const lastChildd= elements.lastElementChild;
    lastChildd.style.backgroundColor = "pink";
})


// .nextElementSibling

const elementt = document.getElementById("apple");
const sibling = elementt.nextElementSibling;
sibling.style.backgroundColor="limegreen";

const elementtt = document.getElementById("vegetables");
const siblingg = elementtt.nextElementSibling;
siblingg.style.textAlign="center";


// .previousElemetSibling

const elementtttt = document.getElementById("potatoes");
const siblinggggg = elementtttt.previousElementSibling;
siblinggggg.style.backgroundColor="red";

const elementttt = document.getElementById("desert");
const siblinggg = elementttt.previousElementSibling;
siblinggg.style.textAlign="right";