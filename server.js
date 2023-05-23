import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { addTodo } from "./TodosController.ts";
import mongoose from "mongoose";

const app = express()
const port = 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set( "/src/views", path.join( __dirname, "/src/views") );
app.set( "view engine", "ejs" );

app.get('/', (_, res) => {
  mongoose.connect('mongodb://root:example@mongo:27017/notes?authSource=admin&authMechanism=SCRAM-SHA-1')
    .then(() => console.log('MongoDB Connected!'))
    .catch(err => console.log(err));
  res.render('index.ejs')
})

app.post('/todos', (_, res) => {
  addTodo()
  console.log(res)
  res.redirect('/');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})