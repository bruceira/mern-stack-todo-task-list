const mongoose = require("mongoose")

const todoSchema = new mongoose.Schema({
  text: {
    type: String,
    required: "must have the name"
  },
  completed: {
    type: Boolean,
    default: false
  },
  createdAd: {
    type: Date,
    default: Date.now()
  }
})

const Todo = mongoose.model("Todo", todoSchema)

module.exports = Todo