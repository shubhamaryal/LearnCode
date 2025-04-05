gsap.from("#page1 #box",{
    scale:0,
    delay:1,
    duration:1,
    rotate: 360,
})

gsap.from("#page2 #box",{
    scale:0,
    // delay:1,
    duration:1,
    rotate: 360,
    /* scrollTrigger:"#page2 box", */ // surfacely grni vye yesari ni grna milxa detail ma chai tala deko xa 
    scrollTrigger:{
        trigger:"#page2 #box", // jun point stater pugyera start huney point
        scroller: "body", // mostly body nai hunxa
        markers:true, // tyo start endpoint ko lagi ho not needed , bujna lai ho 
        start:"top 60%", // start lai 60% garako
    }
})

gsap.from("#page3 #box",{
    scale:0,
    duration:1,
    opacity:0,
    rotate:720,
    scrollTrigger:{
        trigger:"#page3 #box",
        scroller:"body",
        markers:"true",
        start:"top 60%",
        end:"top 30%",
        //scrub: true, 
        /* scrub start dekhi end ko bich ma animation hunxa yo use gryo vne, true false ani aru ni value 
        dina milxa yesma from 1 to 5 */
        scrub: 2, // 2 ma smooth hunxa
        pin:true, // pin vyera scrolll sngai tala janxa
    }
})