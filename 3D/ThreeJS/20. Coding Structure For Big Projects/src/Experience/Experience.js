import Sizes from "./Utils/Sizes";

export default class Experience {
  constructor(canvas) {
    // console.log("here starts a great experiement");

    // Global access
    window.experience = this;

    // Options
    this.canvas = canvas;
    // console.log(this.canvas)
    // console.log(this.sizes.pixelRatio)

    // Setup
    this.sizes = new Sizes();

    this.sizes.on('resize', () => {
        // console.log('i heard a resize')
        this.resize()
    })
  }

  resize() {
    console.log('resize occured')
  }
}
