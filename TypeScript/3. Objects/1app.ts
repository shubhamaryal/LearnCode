// const User = {
//   name: "shubham",
//   email: "shubham@gmail.com",
//   isActive: true,
// };

function createUser({ name: string, isPaid: boolean }) {}

let newUser = { name: "shubham", isPaid: false, email: "s@gmail.com" };

createUser(newUser);

// () -> function parameter
// :{} -> return type
// {} -> defination
function createCourse(): { name: string; price: number } {
  return { name: "typescript", price: 100 };
}

// TYPE

type User = {
  name: string;
  mail: string;
  isActive: boolean;
};

// type Mystring = string
// this is allowed but it is not much used

function inUser(user: User) {}

inUser({ name: "", mail: "", isActive: true });

export {};
