import express from "express";
import { engine } from 'express-handlebars';
import path from 'path';


const app = express()
const port = 3000

//engine handelbar
app.engine('.hbs', engine({
  extname: '.hbs'
}));
app.set('view engine', '.hbs');
app.set('views', 'src/resource/views');
// app.set('views', path.join(__dirname,'resource/views'));

//
// app.use(cors());
// app.use(express.json())
// app.use(morgan('combined'))



app.get('/', (req, res) => {
  res.render('home')
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