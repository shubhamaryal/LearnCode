use("CrudDB");

// db.createCollection("courses");

// db.courses.insertOne({
//   name: "Shubham ko course",
//   price: 0,
//   assignment: 10,
//   project: 5,
// });

// db.courses.insertMany([
//   {
//     name: "Shubham ko course",
//     price: 0,
//     assignment: 10,
//     project: 5,
//   },
//   {
//     name: "Java Beginner",
//     price: 1000,
//     assignment: 8,
//     project: 3,
//   },
//   {
//     name: "Python Advanced",
//     price: 2000,
//     assignment: 12,
//     project: 6,
//   },
//   {
//     name: "Web Development",
//     price: 1500,
//     assignment: 15,
//     project: 4,
//   },
//   {
//     name: "React Fundamentals",
//     price: 2500,
//     assignment: 10,
//     project: 7,
//   },
//   {
//     name: "Machine Learning Basics",
//     price: 3000,
//     assignment: 20,
//     project: 5,
//   },
//   {
//     name: "Full Stack Development",
//     price: 5000,
//     assignment: 18,
//     project: 8,
//   },
//   {
//     name: "Angular Essentials",
//     price: 2000,
//     assignment: 10,
//     project: 6,
//   },
//   {
//     name: "Node.js Mastery",
//     price: 3500,
//     assignment: 15,
//     project: 5,
//   },
//   {
//     name: "Data Science Bootcamp",
//     price: 4000,
//     assignment: 25,
//     project: 10,
//   },
// ]);

// let a = db.courses.find({ price: 0 });
// console.log(a.toArray());

// let b = db.course.findOne({price:0})
// console.log(b)

// db.courses.updateOne({price:0},{$set:{price:100}})

db.courses.updateMany({price:0},{$set:{price:1000}})

db.courses.deleteOne({price:100})