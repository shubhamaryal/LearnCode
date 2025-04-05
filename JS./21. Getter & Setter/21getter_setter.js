/*
    getter - special method that makes a property readable
    setter - special method that makes a property writeable

    validate and modify a value when reading/writing a property
*/

/*
    SYNTAX OF SETTER: 

        class ClassName {
            set propertyName(value) {
                // validation or logic
                this._property = value;
            }
        }

    SYNTAX OF GETTER:

        class ClassName {
            get propertyName() {
                // return the property value
                return this._property;
            }
        }
*/

class Rectangle{
    constructor(height,width){
        this.width=width;
        this.height=height;
    }

    set width(newWidth){ /* the value of width goes to newWidth, navye confuse hunxa vne 
                            same name ni rakhna milxa argumnet ra calling function ko */

                         /* 
                            set width(width){
                                if (width>0){
                                    this._width =width;
                                }
                                else{
                                    ........
                                }
                            }
                        */

        if (newWidth>0){
            this._width =newWidth; /* the width and _width has the same value, the 
                                    underscope represents private data while the 
                                    normal width mean the public data */
        }
        else{
            console.error("Width should be a positive number");
        }
    }

    set height(newHeight){
        if (newHeight>0){
            this._height =newHeight;
        }
        else{
            console.error("Height should be a positive number");
        }
    }

    get width(){
        return `${this._width.toFixed(1)} cm`; /* private data use grnu prxa else error hunxa, 
                                                simple way ma vannu prxa syntax nai tei ho so 
                                                tei use grna prxa */
    }

    get height(){
        return `${this._height.toFixed(1)} cm`;
    }

    get area(){
        return `${(this._height*this._width).toFixed(1)} cm^2`;
    } 
}

const rectangle = new Rectangle(3,4);

console.log(rectangle.width); /* it calls both set and get, euta ma check hunxa 
                                ani arko ley return grxa  */
console.log(rectangle.height);
console.log(rectangle.area);

// -----

class Person{
    constructor(firstName, lastName, age){
        this.firstName=firstName;
        this.lastName=lastName;
        this.age=age;
    }

    set firstName(firstName){
        if (typeof firstName ==="string" && firstName.length>0){
            this._firstName = firstName;
        }
        else{
            console.error( "First name must be an non empty string");        
        }
    }

    set lastName(lastName){
        if (typeof lastName ==="string" && lastName.length>0){
            this._lastName = lastName;
        }
        else{
            console.error( "Last name must be an non empty string");
        }
    }

    set age(age){
        if (typeof age==="number" && age>0){
            this._age=age;
        }
        else{
            console.error("The age must be a non- negative number");
        }
    }

    get firstName(){
        return this._firstName;
    }

    get lastName(){
        return this._lastName;
    }

    get age(){
        return this._age;
    }

    get name(){
        return this._firstName + " " + this._lastName;
    }
}

const person = new Person("Shubham","Aryal",18);

console.log(person.firstName);
console.log(person.lastName);
console.log(person.age);
console.log(person.name);