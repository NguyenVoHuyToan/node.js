import fs from 'fs';
import express from "express";
import morgan from "morgan";
import cors from "cors"
import { createStudent } from './student.js';
const app = express()
const port = 3000
app.use(cors());
app.use(express.json())
app.use(morgan('combined'))

app.post('/', (req, res) => {
 createStudent(req.body)
 return res.json(JSON.parse(fs.readFileSync("students.json")))
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

// const fs = require("fs")
// student = fs.readFile("students.json")
// const newStudent = {"id":"3","name":"March","age":"25","gentle":"male"}
// function CreatStuden () {
//   fs.appendFileSync("students.json", JSON.stringify(newStudent))
// }
// CreatStuden(newStudent)