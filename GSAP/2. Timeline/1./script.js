var tl = gsap.timeline()

tl.to("#box1",{
    x:1500,
    duration: 1.5,
    delay:1,
}) 

tl.to("#box2",{
    x:1500,
    duration: 1.5,
}) 

tl.to("#box3",{
    x:1500,
    duration: 1.5,
}) 

/*
    yesari palai palo chalauna milxa, if yesto use grena vne chai manully 
    time(delay ani duration) add grdaiarko element ko time tei anusar 
    time set grera chalauna prxa, which can be problem in large code or 
    where value are in points
*/
