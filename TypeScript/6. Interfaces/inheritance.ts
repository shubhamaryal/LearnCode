interface User {
  id: number;
  name: string;
  email: string;
}

interface User {
  githubId: string;
}

interface Admin extends User {
  // role: string;
  role: "admin" | "ta" | "learner";
}

// const shubham: User = {
//   id: 1,
//   name: "shubham",
//   email: "s@gmail.com",
//   githubId: "shub",
// };

const shubham: Admin = {
  id: 1,
  name: "shubham",
  email: "s@gmail.com",
  githubId: "shub",
  role: "admin",
};
