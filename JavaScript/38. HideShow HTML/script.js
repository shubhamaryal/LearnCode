const button= document.getElementById("button");
const image= document.getElementById("image");

/*
    button.addEventListener("click",event=>{

        if(image.style.display==="none"){
            image.style.display="block";
            button.textContent="Hide";
        }
        else{
            image.style.display="none";
            button.textContent="show";
        }
    });
*/

/*
    yesari grda button tala mathi hunxa, tyo fix grna lai we need to reserve 
    some space for it ani display mavyera visibility check grni code ma
*/

button.addEventListener("click",event=>{

    if(image.style.visibility==="hidden"){
        image.style.visibility="visible";
        button.textContent="Hide";
    }
    else{
        image.style.visibility="hidden";
        button.textContent="show";
    }
});