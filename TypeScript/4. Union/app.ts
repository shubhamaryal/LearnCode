let score: number | string = 10;

score = 44;
score = "55";

type User = {
  name: string;
  id: number;
};

type Admin = {
  username: string;
  id: number;
};

let shubham: User | Admin = {
  name: "shubham",
  id: 1,
};

shubham = { username: "shub", id: 111 };

// function getDbId(id:number | string){
//     // some api calls
//     console.log(`id is ${id}`)
// }

// getDbId(1)
// getDbId("1")

function getDbId(id: number | string) {
  // id.toLowercase()
  if (typeof id === "string") {
    id.toUpperCase();
  }
}

// array

const data: number[] = [1, 2, 3];
const data1: string[] = ["1", "2", "3"];
const data2: (string | number)[] = ["1", 2, "3"];

let pi:3.14 = 3.14

let seatAllotment: "aisle" | "middle" | "window" 

seatAllotment = "aisle"
// seatAllotment = "crew" // errro