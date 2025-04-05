import mongoose from "mongoose";

const TodoSchema = new mongoose.Schema({
  title: String,
  desc: String,
  isDone: Boolean,
});

// const TodoSchema = new mongoose.Schema({
//     title: {type: String, required:true, default: "Hey"},
//     desc: String,
//     isDone:Boolean,
//   });

// yo mathi ko garera main ma new Todo ma title diyena 
// vne default title Hey DB ma store hunxa 

export const Todo = mongoose.model("Todo", TodoSchema);