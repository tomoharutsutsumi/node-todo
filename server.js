import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { add } from "./TodosController.ts";

const app = express()
const port = 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set( "/src/views", path.join( __dirname, "/src/views") );
app.set( "view engine", "ejs" );

app.get('/', (_, res) => {
  res.send(`${add(2,3)}`)
  //res.render( "index.ejs" );
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})