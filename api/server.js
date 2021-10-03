const mongoose = require("mongoose")
const cors = require("cors")
const express = require("express")
const todoRoutes = require("./routes/todoRoutes")

mongoose.connect("mongodb://localhost/todos", {
  useNewUrlParser: true
}).then(console.log("db connected"))

const app = express()

app.use(cors())
app.use(express.json())
app.use("/", todoRoutes)

app.listen(5050, () => console.log("connected on port 3001"))