//input slider
let select = (e) => document.querySelector(e);
let selectAll = (e) => document.querySelectorAll(e);

let progressSlider = select("#progressSlider");
let time = select("#time");
let pause = select("#pause"); //better than document.querySelector("#pause")

let animation = gsap.to("#herman", {
    duration: 6,
    ease: "none",
    motionPath: {
        path: "#motionpath",
        align: "#herman",
    },
    onUpdate: animationUpdate,
    onComplete: () => (pause.innerHTML = "play"),
});

progressSlider.addEventListener("input", function () {
    animation.progress(this.value).pause();
});

progressSlider.addEventListener("change", function () {
    pause.innerHTML = "play";
});

function animationUpdate() {
    progressSlider.value = animation.progress();
    time.innerHTML = this.time().toFixed(2);
}

pause.addEventListener("click", () => {
    animation.paused(!animation.paused());
    if (animation.progress() == 1) {
        animation.restart();
    }
    pause.innerHTML = animation.paused() ? "play" : "pause";
});
