/*
    constructors = special method or defining the properties nd method of objects
*/

function Person(first, last, age, eye) {
    this.firstName = first;
    this.lastName = last;
    this.age = age;
    this.eyeColor = eye;  //agadi ko access grna lai ani 2nd ko call vako value ho but 
                          // yo duiotai ko name same rakhyo vne chai sajilo hunxa 
    this.nationality = "English";
    this.fullName = function(){console.log(`Your name is ${this.firstName} ${this.lastName}`)}; // yesari function 
                                                                        // ni pass grna milxa 
}

const myFather = new Person("John", "Doe", 50, "blue");
const myMother = new Person("Sally", "Rally", 48, "green");
const mySister = new Person("Anna", "Rally", 18, "green");
const mySelf = new Person("Johnny", "Rally", 22, "green");

/*
    console.log(myFather); // yesari chai sabai ekai choti print grna milxa 
*/

console.log(myFather.firstName);
console.log(myFather.lastName);
console.log(myFather.age);
console.log(myFather.eyeColor); // yesari xutaa xutai sabai access grna milyo 
console.log(myFather.extra = "this is extra"); // xutai kei add grna pryo vne ni yesari milxa 

console.log(myFather.nationality);


console.log("----------");

console.log(mySelf.firstName);
console.log(mySelf.lastName);
console.log(mySelf.age);
console.log(mySelf.eyeColor);

Person.prototype.location = "KTM"; // to add smthg inside a constructor (or function), 
                                    // .prototype use nagrni add gnra mildaina  

console.log(mySelf.location);

myFather.fullName();
mySelf.fullName(); // yesri tyo function lai call grna milxa ani print grna milxa
