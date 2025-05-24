/* THIS CODE CONTAINS ABOUT ID NAME TAGENAME 
THE CODE FOR QUERY AND QUERYALL SELECTORS ARE ON INDEX2 */ 

const heading = document.getElementById("heading");
heading.style.backgroundColor = "yellow";
heading.style.textAlign = "center";

//

const lists = document.getElementsByClassName("lists");
lists[0].style.textAlign="center";
lists[1].style.textAlign="right";
lists[2].style.textAlign="left"; // this works like an array

for (let list of lists){
    list.style.backgroundColor="limegreen";
}

/* html colllections dont support array methods, we need to make it array
 and use other methods */
 
const listss = document.getElementsByClassName("listss");

Array.from(listss).forEach(lists=>{
    lists.style.backgroundColor="red";
});

//

const h4= document.getElementsByTagName("h4");
const li= document.getElementsByTagName("li");

Array.from(h4).forEach(element=>{
    element.style.backgroundColor="pink";
});

Array.from(li).forEach(element=>{
    element.style.backgroundColor="orange";
});