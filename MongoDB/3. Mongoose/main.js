// https;//www.npmjs.com/package/mongodb

import mongoose from "mongoose";
import express from "express";
import { Todo } from "./models/Todo.js";

let conn = await mongoose.connect("mongodb://localhost:27017/todo") // / paxi ko database ho

const app = express()
const port = 3000

app.get('/', (req, res) => {
  const todo = new Todo({title: "Hey first todo", desc:"Description of the todo", isDone:false})
  // const todo = new Todo({ desc:"Description of the todo", isDone:false})
  // Todo.js ma default ma Hey ayuna lai mathi ko grna paryo
  todo.save()

  // Todo.find        // yessari crud operation grna milxa 
  res.send('Hello World!')
})

app.get('/a', async (req, res) => {
  let todo = await Todo.findOne({})
  console.log(todo)
  res.json({title: todo.title, desc: todo.desc})
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})