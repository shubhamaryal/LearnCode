/*
    here we convert string into object so tesma cconvert grna ko lagi chai "" or `` use grni
*/

const jsonName = `["Spongebob","Patrick","Squidward","Sandy"]`
const parsedName =JSON.parse(jsonName);
console.log(jsonName);
console.log(parsedName);

/*
    here we converted string into array
*/

const jsonPerson = `{
    "name":"Spongebob",
    "age":30,
    "isEmployed":true,
    "hobbies":["Jellyfishing","Cooking","Karatee"]
}`

const parsedPerson =JSON.parse(jsonPerson);
console.log(jsonPerson);
console.log(parsedPerson);

/*
    here we converted objects into array
*/

const jsonPeople = `[{
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
}]`

const parsedPeople =JSON.parse(jsonPeople);
console.log(jsonPeople);
console.log(parsedPeople);

/*
    here we converted array of objects into array
*/
