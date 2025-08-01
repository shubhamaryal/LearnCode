export default class Robot {
    constructor(name, legs) {
        this.name = name
        this.legs = legs
        console.log(`Im ${this.name}, Thank you creator`)
    }
    sayHI() {
        console.log(`Hello, im ${this.name}`)
    }
}