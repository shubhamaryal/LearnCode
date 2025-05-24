const newListItem=document.createElement("li");
newListItem.textContent="coconut";
document.body.append(newListItem);
newListItem.id="coconut";
newListItem.style.fontWeight="bold";
newListItem.style.backgroundColor="lightgreen"; 

// document.getElementById("fruits").prepend(newListItem); 
// first ma add grdinxa prepend le

const orange = document. getElementById("orange");
document.getElementById("fruits").insertBefore(newListItem,orange); 

/* order list anusar afai number assign grxa  */

/*
    similarly agi ko example ma greko sabai yesma grnu milxa
*/