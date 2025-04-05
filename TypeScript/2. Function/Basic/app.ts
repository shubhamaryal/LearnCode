function addTwo(num: number) {
  // return num + 2
  return "hi"; // to avoid this there is a better way of writing function
}
let value = addTwo(5);

function loginUser(name: string, email: string, isPaid) {}
loginUser("Shubham", "shubham@gmail.com", true);

// if we are not passing any variable, then we should declare it as false
let signUp = (name: string, email: string, isPaid: boolean = false) => {};
signUp("Shubham", "shubham@gmail.com");

export {};
