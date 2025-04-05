var path = `M 30 100 Q 500 100 700 100`;
var finalPath = `M 30 100 Q 500 100 700 100`;

var string =document.querySelector("#string");

string.addEventListener("mousemove",function(dets){
    path = `M 30 100 Q ${dets.x} ${dets.y} 700 100`;

    gsap.to("svg path",{
        attr:{d:path},
        duration:0.3,
        ease: "power3.out"
    });
});

string.addEventListener("mouseout",function(){
    gsap.to("svg path",{
        attr:{d:finalPath},
        duration:1.3,
        ease: "elastic.out(1,0.4)"
    });
});