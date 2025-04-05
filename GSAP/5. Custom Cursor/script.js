var main= document.querySelector("#main");
var cursor= document.querySelector("#cursor");
var imageDiv= document.querySelector("#image");

main.addEventListener("mousemove",function(dets){
    gsap.to(cursor,{ // no need in "" cuz mathi initialize gryaxam
        x:dets.x,
        y:dets.y,
        duration: 0.3,
        opacity:1,
    });
});

imageDiv.addEventListener("mouseenter",function(){
    gsap.to(cursor,{
        scale:3,
        backgroundColor: "grey",
    });
});

imageDiv.addEventListener("mouseleave",function(){
    gsap.to(cursor,{
        scale:1,
        backgroundColor: "white",
    });
});