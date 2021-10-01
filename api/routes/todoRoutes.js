const express = require("express")
const Todo = require("../models/todoModel")

const router = express.Router()


router.get("/todos", async (req, res) => {
  const todo = await Todo.find()
  res.status(200).json({ status: "Success", data: { todo } })

})

router.post("/todos/new", async (req, res) => {
  const todo = await new Todo(req.body).save()
  res.status(201).json({ status: "Success", data: { todo } })

})

router.delete("/todos/delete/:id", async (req, res) => {
  const todo = await Todo.findByIdAndDelete(req.params.id)
  res.status(200).json({ status: "Success", data: { todo } })
})

router.put("/todos/complete/:id", async (req, res) => {
  const todo = await Todo.findById(req.params.id)
  todo.complete = !todo.complete
  todo.save()
  res.status(200).json({ status: "Success", data: { todo } })
})

module.exports = router