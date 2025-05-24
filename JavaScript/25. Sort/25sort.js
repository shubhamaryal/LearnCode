let sortCharacters = ["x","b","t","d"];
console.log(sortCharacters.sort()); 

/* sort can sort the string but cant sort the number

sort works in Lexicographical Order and it treats the number as array too

suru ma first number herxa i.e. 1 2 3 ani suru ko elemnt same vako suru ma sort 
grxa tes paxi chai arko number ma switch hunxa */

const number = [1,2,20,50,5,3,4,10];
console.log(number.sort());  // yesari sort grxa so it is not useful

console.log(number.sort((a,b)=>a-b)); // this trick is used to sort the numbers

console.log(number.sort((a,b)=>b-a)); // reverse sort grda yesari grni

///////////////////

const students = [
    { name: "Alice", age: 22, gpa: 3.5 },
    { name: "bob", age: 20, gpa: 3.7 },
    { name: "Charlie", age: 23, gpa: 3.2 },
    { name: "david", age: 21, gpa: 3.8 },
    { name: "Eve", age: 22, gpa: 3.6 }
];

students.sort((a, b) => a.name.localeCompare(b.name));

console.log(students); 

/* normal sort hrnu mildaina so need to use this method for sorting 
number chai normally nai sort grnu milxa yeta aur kei use grnu prdaina */

students.sort((a, b) => a.age-b.age);

console.log(students); 