const myBox= document.getElementById("myBox");

/*
    36 i.e. mouse event jastai , yesma same code use grna milxa ani color 
    ra content change grna milxa, the only difference is event in the 
    syntax, yesma click haru hunthiyo vne yesma chai KEYUP KEYDOWN hunxa
*/

const moveAmount= 10;
let x=0;
let y=0;

document.addEventListener("keydown",event=>{
    myBox.style.backgroundColor="red";
});

document.addEventListener("keyup",event=>{
    myBox.style.backgroundColor="cyan";
});

document.addEventListener("keydown",event=>{
    if(event.key.startsWith("Arrow")){

        event.preventDefault();

        switch(event.key){
            case "ArrowUp":
                y-=moveAmount;
                break;
            case "ArrowDown":
                y+=moveAmount;
                break;
            case "ArrowRight":
                x+=moveAmount;
                break;
            case "ArrowLeft":
                x-=moveAmount;
                break;
        }

        myBox.style.top=`${y}px`;
        myBox.style.left=`${x}px`;
    }
});