/* ----- Example 1 ----- */

/*
    if there is no ids then we can put the element in between boxes using the
    classes, query selector use grera tya bata use grni , boxes haru sabai 
    matrix ko form ma hunxa ani 0,1,2.... [] ma halyera tei anusar ley use 
    grnu prxa
*/

const newH1=document.createElement("h1");

newH1.textContent="111";

const boxes = document.querySelectorAll(".box");
document.body.insertBefore(newH1,boxes[1]);


/*
    to remove we need to select where the loction of the element, box1 ma xa
    vne tyo select, body ma xa vne body selwct grnu pryo
*/

/*
    document.body.removeChild(newH1);
*/