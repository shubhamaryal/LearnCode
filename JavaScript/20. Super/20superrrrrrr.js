/*
    super - keyword is used in class to call the constructor or access the properties 
            and methods of a parent (superclass)

    this - this objext
    super - the parent
*/

class Animal{
    constructor(name,age){
        this.name= name;
        this.age=age;
    }

    move(speed){        // yeta ko speed tala this.___Speed bata ko xa 
        console.log(`The ${this.name} moves at a speed of ${speed}mph`);
    }
}

class Rabbit extends Animal{
    constructor(name,age,runSpeed){
        super(name,age);                /* this use grnu vnda aagadi super use grnu prxa
                                        derived class ma, navyera error aayuxa. */
        this.runSpeed=runSpeed;         // yesley speed ko value lai mathi pathauxa
    }

    run(){
        console.log(`The ${this.name} can run.`);
        super.move(this.runSpeed);  /* parent class lai access grna super ani child class 
                                    ko lagi chai this use greko ho */
    }
}

class Fish extends Animal{
    constructor(name,age,swimSpeed){
        super(name,age);
        this.swimSpeed=swimSpeed;
    }

    swim(){
        console.log(`The ${this.name} can swim.`);
        super.move(this.swimSpeed);
    }
}

class Hawk extends Animal{
    constructor(name,age,flySpeed){
        super(name,age);
        this.flySpeed=flySpeed;
    }

    fly(){
        console.log(`The ${this.name} can fly.`);
        super.move(this.flySpeed);
    }
}

const rabbit = new Rabbit("rabbit",1,25);
const fish = new Fish("fish",2,12);
const hawk = new Hawk("hwak",3,50);

console.log(rabbit.name);
console.log(rabbit.age);
console.log(rabbit.runSpeed);

console.log(fish.name);
console.log(fish.age);
console.log(fish.swimSpeed);

console.log(hawk.name);
console.log(hawk.age);
console.log(hawk.flySpeed);

rabbit.run();
fish.swim();
hawk.fly();