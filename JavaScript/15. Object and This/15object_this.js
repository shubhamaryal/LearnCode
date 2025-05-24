/* 
    object = a colllection of related properties and/or methods.

    can represent real world objects (people, products, places)

    SYNTAX: object_name = {key : value,
                          function()}
*/

const person1={
    firstName:"Shubham",
    lastName: "Aryal",
    age: 18,
    isEmployed : false,
    sayHello: function(){console.log(`Hey, my name is ${this.firstName}`)}, 
                                                    /* 
                                                        to access the key of the object 
                                                        we need to use dot operator with 
                                                        the name of object but instead 
                                                        we can use this and access the 
                                                        following operator. this doesnot 
                                                        work with arrow functions. 
                                                    */
    eat : function(){console.log("I like eating momos")},
}

const person2={
    firstName:"Ram",
    lastName: "Nepal",
    age: 30,
    isEmployed : true,
    sayHello: ()=>{console.log(`Hi, im ${person2.firstName}`)}, // here in arrow function
                                                                // we cant use this
    eat : ()=>{console.log("Im veg.")},
}

// object cant have same name but the key's inside the object can have same name
// everything inside the object is ended by common "," and not by semi-colon ";"

console.log(person1.firstName);
console.log(person1.lastName);
console.log(person1.age);
console.log(person1.isEmployed);
person1.sayHello();
person1.eat();

console.log(person2.firstName);
console.log(person2.lastName);
console.log(person2.age);
console.log(person2.isEmployed);
person2.sayHello();
person2.eat();

/*
    this = reference to the object where THIS is used
        ( the object depends on the imediate context )
    person.name = this.name
*/