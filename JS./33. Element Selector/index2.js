/* THIS CODE CONTAINS ABOUT QUERY AND QUERY ALL SELECTORS */

/* query selector ley euta matra select grxa ani we can pass anything 
eg: class id tags, but sab vnda suru ko matra select grxa */
 
const element = document.querySelector(".lists"); /* selecting class so "." 
                                                    in hunu prxa  */
element.style.backgroundColor="yellow";


const element1 = document.querySelector("h4"); /* no "." needed cuz its a tag */
element1.style.backgroundColor="limegreen";

// -----

const lists = document.querySelectorAll("li");

lists.forEach(element => {
    element.style.backgroundColor="pink";
});