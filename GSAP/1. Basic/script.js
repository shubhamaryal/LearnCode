gsap.to("#box1",{ 
    x:1200,
    duration:2,
    delay:1,
    rotation:360,
    backgroundColor:"blue",
    borderRadius:"50%",
    repeat:1, // ek choti repeat hunxa, ani -1 
    yoyo:true, // final position ma gyera feri initial ma jani kina nai vnera grna lai ho 
})

gsap.from("#box2",{ 
    x:1200,
    duration:2,
    delay:1,
    rotation:360,
    backgroundColor:"red",
    borderRadius:"50%",
})

/* 
    FROM use grda chai hamle deko detail bata inital ma janxa 
    TO use grda chai inital bata hamle deko detail ma janxa
*/

gsap.from("h1",{
    opacity:0,
    duration:2,
    y:30,
    delay:1,
    stagger:1, /* negative in dinu milxa, last bata suru hunxa tyo gryo vne chai */
})