/* ----- Example 1 ----- */

/*
    Step 1: CREATE THE ELEMENT
    Step 2: ADD ATTRIBUTES AND PROPERTIES
    Step 3: APPEND ELEMENT TO DOM
    Step 4: REMOVE HTML ELEMENT
*/

// -------------------------------------------------------------------------
const newH1=document.createElement("h1"); /* here we arent taking the ids, we 
                                            are taking the tags like h1, 
                                            h2.... li... */

newH1.textContent="111";
newH1.id= "myH1"; // this creates the id for the newH1
newH1.style.color="tomato"; // we can apply css properties
newH1.style.textAlign="center"; 

document.body.append(newH1);

//

const newH2=document.createElement("h1");

newH2.textContent="2222";

document.body.prepend(newH2);

// -------------------------------------------------------------------------

/* 
    if we append an element then it become the last child of that parent 
    and prepend makes the element as the first child of the parent

    In the above example, body is the parent and newH1 is the last child of 
    that parent, as append is used and newH2 is the first child of that parent,
    as prepend is used and  the div are the other childs of that parent
*/


// -------------------------------------------------------------------------
/* 
    We made the body element as a parent (.body) but we can change it and 
    make anything as a parent and use the JS methods. Example is given below
*/

const newH3=document.createElement("h1");

newH3.textContent="333";

document.getElementById("box1").append(newH3);

//

const newH4=document.createElement("h1");

newH4.textContent="444";

document.getElementById("box2").prepend(newH4);

// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
/*
    we can also insert the element in between two boxes
*/

const newH5=document.createElement("h1");

newH5.textContent="555";

const box4 =document.getElementById("box4");
document.body.insertBefore(newH5,box4); 

/* 
    the above line means insert the newH1 before box4
    
    the box4 is child of the body so we need to access it through the body.

    insertBefore(newElement, currentElement); 

    in this way we can insert element in between two boxes
*/
// -------------------------------------------------------------------------


// -------------------------------------------------------------------------
/*
    to remove we need to select where the loction of the element, box1 ma xa
    vne tyo select, body ma xa vne body select grnu pryo
*/

/*
    document.getElementById("box1").removeChild(newH1);
*/
// -------------------------------------------------------------------------
