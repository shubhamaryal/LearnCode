function addTwo(num: number): number {
  return num + 2;
  // return  "hi" // this is allowed if return is not declared
}
let value = addTwo(5);

// function myValue(myVal:number){
//     if(myVal>5){
//         return true
//     }
//     return "200 ok"
// }

const getHello = (s: string): string => {
  return "";
};

const heros = ["thor", "ironman", "spiderman"];
// const heros = [12, 23, 34];

heros.map((hero): string => {
  return `hero is ${hero}`;
});

function consoleError(errmsg: string): void {
    console.log(errmsg)
}

function handleError(errmsg:string): never {
    throw new Error(errmsg)
}

export {};
