import Robot from './Robot.js'

export default class FlyingRobot extends Robot {
    constructor (name, legs) {
        super(name, legs)
        super.sayHI()
    }
    sayHI () {
        console.log(`Hello my name is ${this.name}, im a flying robot`)
    }
    takeOff () {
        console.log(`have a good flight ${this.name}`)
    }
    land () {
        console.log(`Welcome back ${this.name}`)
    }
}