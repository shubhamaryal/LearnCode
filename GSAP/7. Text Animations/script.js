function breakText(){
    var h1 = document.querySelector("h1");

    var h1Text = h1.textContent;

    var splittedText = h1Text.split("");

    var halfValue = splittedText.length/2;

    var clutter = "";

    splittedText.forEach(function(element,index){
        if(index<halfValue){
            clutter += `<span class="a">${element}</span>`;
        }
        else{
            clutter += `<span class="b">${element}</span>`;
        }
    });

    h1.innerHTML = clutter;
}

breakText();

gsap.from("h1 .a",{
    y:50,
    opacity:0,
    duration:0.8,
    delay: 0.5,
    stagger:0.15,
});

gsap.from("h1 .b",{
    y:50,
    opacity:0,
    duration:0.8,
    delay: 0.5,
    stagger:-0.15,
});