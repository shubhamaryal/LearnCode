 /*
    inheritance - allows a new class to inherit properties and methods from an exsisting 
                   class (parent->child) 
                - helps with code reusability
                - yo vneko euta class ko property arko ma by making a child class

 SYNTAX : class child_class_name extends parent_class{}
 */

class Animal{
    alive = true;

    eat(){
        console.log(`This ${this.name} is eating.`);
    }

    sleep(){
        console.log(`This ${this.name} is sleeping.`);
    }                                                         /* yo sabai function haru sab 
                                                               class ma lekhna prena euta 
                                                               ma lekhyesi sabai ma vyo so 
                                                               this is helpful */

                                                              /* common type ko vye matra 
                                                               it is useful else unique 
                                                               kei xa vne tei child class
                                                               mai banauna milxa */
}

class Rabbit extends Animal{
    name="Rabbit";

    run(){
        console.log(`${this.name} can run.`);
    }
}
class Snake extends Animal{
    name="Snake";

    run(){          // same name ko function ni banauna milxa for different classes 
        console.log(`${this.name} cant run`);
    }
}

const rabbit = new Rabbit();
const snake = new Snake();

rabbit.alive=false;

console.log(snake.alive);
console.log(rabbit.alive);

rabbit.eat();
snake.sleep();

rabbit.run();
snake.run();