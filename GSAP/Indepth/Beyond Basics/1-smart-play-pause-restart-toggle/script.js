let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectorAll(e);

let pause = select("#pause");

let animation = gsap.to("#herman", {
    duration: 6,
    ease: "none", // default is power1 easing
    motionPath: {
        path: "#motionpath",
        // hamro tyo path ko id chai motion path ho so hamle motion path vyesi herman i.e. tyo vyaguta ni tyo path ma animate hunxa
        // herman chai motionpath ma hidirako xa tara motionpath svg lai hamle 200px tala rakhyeko xam so herman pani afno location bata 200px tala bata move vako xa
        align: "#herman",
        // so align le herman lai afno location ma rakhxa ani motion path ko hisab ma animate grdinxa
    },
    onComplete: () => (pause.innerHTML = "restart"),
});

pause.addEventListener("click", () => {
    // animation.pause()
    animation.paused(!animation.paused());
    // animation.reversed(!animation.reversed());

    // if (animation.paused()) {
    //     pause.innerHTML = "play";
    // } else {
    //     pause.innerHTML = "pause";
    // }

    // pause.innerHTML = animation.paused() ? "play" : "pause";

    if (animation.progress() === 1) {
        animation.restart();
    }
    pause.innerHTML = animation.paused() ? "play" : "pause";

    // animation last ma pugyesi tyo pause state ma ni hudena, palying state ma ni hudena so hamle onComplete callback use garera tesko text change gareko ho
});
