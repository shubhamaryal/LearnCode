// foreach = metohd used to iterate over the elements of an array and 
//          apply a specified function (callback) to each element

// array.forEach(callback) : syntax

// element, index and array are provided 

// it calls a function for each elements in array

let numbers = [1,2,3,4,5];

numbers.forEach(double);
numbers.forEach(display);

function double(element,index,array){
    array[index]=element*2;
}

function display(element){
    console.log(element);
}

/* ----- */

let fruits =["apple", "mango", "banana"];

fruits.forEach(caps);
fruits.forEach(output);

function caps(element,index,array){
    array[index]=element.toUpperCase();
}

function output(element){
    console.log(element);
}



// .map() = accept a callback nd applies that function to each element of an array, then
//          return a new array 

// similar to forEach but it return array instead

const num=[1,2,3,4,5];
const numCube= num.map(cube);

console.log(numCube);

function cube(element){
    return Math.pow(element,3);
}

/* ----- */

const dates =["2062-05-29","2049-02-02","2066-09-23"];
const formattedDates = dates.map(formatDates);

console.log(formattedDates);

function formatDates(element){
    const parts =element.split("-");
    return `${parts[1]}/${parts[2]}/${parts[0]}`;
}