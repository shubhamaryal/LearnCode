const name = ["Spongebob","Patrick","Squidward","Sandy"]

const jsonStringName  =JSON.stringify(name);
console.log(name);
console.log(jsonStringName);

/*
    here we used an array and JS array lai string ma covert greko 
*/

const person = {
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","Cooking","Karatee"]
}

const jsonStringPerson  =JSON.stringify(person);
console.log(person);
console.log(jsonStringPerson);

/*
    here we used an object and JS object lai string ma covert greko 
*/

const people = [{
    "name":"Spongebob",
    "age":30,
    "isEmployed":true
},
{
    "name":"Patrick",
    "age":34,
    "isEmployed":false
},
{
    "name":"Squidward",
    "age":50,
    "isEmployed":true
},
{
    "name":"Sandy",
    "age":27,
    "isEmployed":false
}]

const jsonStringPeople  =JSON.stringify(people);
console.log(people);
console.log(jsonStringPeople);

/*
    here we used an array of objects and teslai string ma covert greko 
*/