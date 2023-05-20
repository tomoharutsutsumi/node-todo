import express from "express";
import path from "path";
import { fileURLToPath } from "url";

const app = express()
const port = 8000
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

app.set( "views", path.join( __dirname, "views") );
app.set( "view engine", "ejs" );

app.get('/index', (req, res) => {
  res.render( "index" );
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})