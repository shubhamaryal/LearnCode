let buttons = document.querySelectorAll(".buttons");

buttons.forEach(button => {
    button.style.backgroundColor="limegreen";
    button.textContent += " !"; // + vyena vne replace hunxa, + vyo vne append
});

buttons.forEach(button => {
    button.addEventListener("click",event=>{
        event.target.style.backgroundColor="tomato";
    });
});

/*
    similarly yesari nai mouseover ani mouseout ko lagi ni banauna milxa
*/

const newButton= document.createElement("button");
newButton.textContent="Button 5";
newButton.classList="buttons";
document.body.appendChild(newButton);

/*
    if we console log buttons then, where will only be 4 buttons
    nodelist cant have the 5th button , we need to manuaally add it
    we can use querySelectorAll to add the 5th button to the console
*/

/*
    buttons.forEach(button => {
        button.addEventListener("click",event=>{
            event.target.remove();
        });
    });
*/

/*
    this is for removing buttons, but remove gryeni tyo log ma basirako 
    hunxa so tyo fix grna ni querySelectorAll use grnu prxa 
*/