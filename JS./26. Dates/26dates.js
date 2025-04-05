console.log(Date()); // gives current data

// Syntax: Date(year,month,day,hour,minute,second,ms) 

/* Yetai console grera custom date print grna khojyo vne mildaina so need to
create an object */

const date1 = new Date(2005,8,14,5,45,5);
console.log(date1);

const date2 = new Date("2005-09-15T05:45:06Z");
console.log(date2); 


const date3= new Date(100000000000);
console.log(date3);

// DATE METHODS

const date = new Date();

console.log(date.getFullYear()); /* yesari kunai pani date ko specific year 
                                    month time j ni nikalnu milxa */

date.setFullYear(2062); /* yesari change ni grna milxa kunai specifc lai */
console.log(date.getFullYear());

// DATE COMARISIONS

const d1 = new Date("2005-05-29");
const d2 = new Date("2006-01-15");

console.log((d1>d2)? "Im not thulo" : "Im thulo"); /* It doesnot compare like 
                                                    age but compares like numbers */
 