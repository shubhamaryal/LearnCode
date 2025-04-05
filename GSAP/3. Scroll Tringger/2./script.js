gsap.from("#page2 h1",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h1",
        scroller:"body",
        markers:true,
        start:"top 50%",
    }
})

gsap.from("#page2 h2",{
    opacity:0,
    duration:2,
    x:500,
    scrollTrigger:{
        trigger:"#page2 h2",
        scroller:"body",
        markers:true,
        start:"top 50%",
    }
})