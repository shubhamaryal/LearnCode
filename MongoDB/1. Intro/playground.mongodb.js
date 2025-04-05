// Select the database to use.
use("ShubhamDatabase");

// Insert a few documents into the sales collection.
db.getCollection("courses").insertMany([
  {
    name: "Java",
    Price: 20000,
    Instructor: "Shubham",
  },
  {
    name: "Python",
    Price: 15000,
    Instructor: "Anjali",
  },
  {
    name: "JavaScript",
    Price: 18000,
    Instructor: "Ramesh",
  },
  {
    name: "C++",
    Price: 17000,
    Instructor: "Alok",
  },
  {
    name: "HTML & CSS",
    Price: 12000,
    Instructor: "Pooja",
  },
  {
    name: "React",
    Price: 25000,
    Instructor: "Suman",
  },
  {
    name: "Angular",
    Price: 24000,
    Instructor: "Neha",
  },
  {
    name: "Node.js",
    Price: 23000,
    Instructor: "Kunal",
  },
  {
    name: "Data Science",
    Price: 30000,
    Instructor: "Ankit",
  },
  {
    name: "Machine Learning",
    Price: 35000,
    Instructor: "Sneha",
  },
]);

// Print a message to the output window.
console.log("Done inserting data");
