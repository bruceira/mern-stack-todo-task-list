const express = require("express")
const Todo = require("../models/todoModel")

const router = express.Router()


router.get("/todos", async (req, res) => {
  const todo = await Todo.find()
  // res.status(200).json({ status: "Success", data: { todo } })
  res.json(todo)
})

router.post("/todos/new", async (req, res) => {
  const todo = await new Todo(req.body).save()
  res.json(todo)

})

router.delete("/todos/delete/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id)
  res.json(todo)
})

router.get("/todos/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  todo.completed = !todo.completed
  todo.save()
  res.json(todo)
})

module.exports = router