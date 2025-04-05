import fs from "fs/promises";

let a = await fs.readFile("shubham.txt");

// let b = await fs.writeFile("shubham.txt", "\n\n\nThis is amazing promise");

let b = await fs.appendFile("shubham.txt", "\n\n\nThis is amazing promise");



console.log(a.toString(), b);
