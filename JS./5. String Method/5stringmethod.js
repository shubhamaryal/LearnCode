/* ----- String Method ----- */

let name="Shubham";

console.log(name.charAt(2)); //0 bata start hunxa ani jati number haleko teti number ko character output dinxa

console.log(name.indexOf("h")); //kati number ma tyo letter xa check grna lai 

console.log(name.lastIndexOf("h")); //repeated charater vyera lasst ko wala ko number thapauna

console.log(name.length); //for length of the character

console.log(name.trim()); //text ko agadi paxadi space xa vne chai space remove grxa 

console.log(name.toUpperCase()); //upper case

console.log(name.toLowerCase()); //lower case

console.log(name.repeat(4)); //repeats the string

console.log(name.startsWith(" ")); //k bata start hunxa tyo check grna lai
console.log(name.startsWith("S"));

console.log(name.endsWith(" ")); //k bata end hunxa tyo check grna lai
console.log(name.endsWith("m"));

console.log(name.includes(" ")); //tyo letter name ma xa ki nai check grna lai
console.log(name.includes("a"));

/* ------ */

let phone= "971-2345674";

console.log(phone.replaceAll("-"," ")); /* first ko ma k replace grni tyo, 2nd 
                                            ma k ley replace grni tyo */

console.log(phone.padStart(16,"+977-")); /* 15 means lamo banauney, 2nd ko 
                                            chai first ma k add grni vnya ho */

console.log(phone.padEnd(15,"0")); //last ma kati samma k add grni vnera bujinxa 



/* ----- String slicing ----- */

const fullname="Shubham Aryal";

let firstname=fullname.slice(0,7);
let lastname=fullname.slice(8,13); //last ko 13 nalekhyeni hunxa
let latchar=fullname.slice(-1); //neg ma ni lekhna milxa 

console.log(firstname);
console.log(lastname);
console.log(latchar);

//aba count nagri pani output nikalnu milxa using indexOf

let firstname2=fullname.slice(0,fullname.indexOf(" ")); 
let lastname2=fullname.slice(fullname.indexOf(" ")); 
let lastname3=fullname.slice(fullname.indexOf(" ")+1); //+1 gryo vne chai space hatxxa 

console.log(firstname2);
console.log(lastname2);
console.log(lastname3);


/* ------ */

const mail= "shubham123@gmail.com";

console.log(mail.slice(0, mail.indexOf("@")));
console.log(mail.slice(mail.indexOf("@")+1));