fetch("names.json")
    .then(response=>response.json())
    .then(value=>console.log(value));

fetch("person.json")
    .then(response=>response.json())
    .then(value=>console.log(value));

/*
    response.json return sa promise so value use grna milyo
*/

fetch("people.json")
    .then(response=>response.json())
    .then(value=>console.log(value));

/*
    to iterate through all values 
*/


fetch("people.json")
    .then(response=>response.json())
    .then(values=> values.forEach(value => {console.log(value)}));


fetch("people.json")
    .then(response=>response.json())
    .then(values=> values.forEach(value => {console.log(value.name)}));

/* we can also use catch if there occurs error while fetching data */