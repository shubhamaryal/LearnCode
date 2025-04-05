/*
    nested objects = objects inside of the other objects. 
                     allows you to represnt more complex data structures.
                     child object is enclosed by parent object

                     Person{Address{}, ContactInfo{}}
                     shoppingCart{Keyboard{},Mouse{},Monitor{}}
*/

const parentObj = {                 // paretn object
    name : {                        // child object
        firstName : `Shubham`,
        lastName : `Aryal` ,
    },                              // yeta ni comma dinu prxa
    age : 18,
    place : {
        country : `Nepal`,
        city :`Butwal`,
        tole : `Deepnagar`,
    },
    student : true,
    hobbies: [`anime`,`drawing`,`coding`],
}

console.log(parentObj.name); // yesari gryo vne chai sabai dinxa so yesto nagrni 

console.log(parentObj.name.firstName); /* dui choti accessor use grni ani
                                            individual lai access grna milxa */
console.log(parentObj.place.city);
console.log(parentObj.hobbies); /* can use array accessor to print individual */

// sabai ekai choti print grnu xa vne chai yesto grna milxa 

for (const property in parentObj.name){
    console.log(parentObj.name[property]);
}

console.log(`----------`); // ---------------------------------------------------

class Person{
    constructor(name,age,...address){       /*  suru ma agadi ko 2 ta ko value 
                                                ayuxa ani baki vako sabai chai 
                                                ... ley rakhni vyo, ani tyo 
                                                chai sab array ko form ma hunxa */
        this.name=name;
        this.age=age;
        this.address=new Address(...address);   /* new gari skye paxi tesma 
                                                    element dinu pryo i.e. 
                                                    object haru, tyo object chai 
                                                    spread operator ley array ko 
                                                    form ma rakhyexa ani feri 
                                                    ... use gryesi sabai xutinxa 
                                                    ani paxi tyo element pani 
                                                    class ko constructor ko 
                                                    object bandinxa , call 
                                                    gryei jstai hisab ko 
                                                    logic use vairako xa */
    }
} 

class Address{
    constructor(countryy,cityy,placee){
        this.countryy=countryy;
        this.cityy=cityy;
        this.placee=placee;
    }
}

const person1= new Person("shubham",18,"nepal","butwal","deepnagar");

console.log(person1.address.placee); /* agi jasari nai grnu prxa print grda chai */

