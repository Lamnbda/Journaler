const express = require("express");
const bodyParser = require("body-parser");
const ejs = require("ejs");

const app = express();
app.set('view engine', 'ejs');

app.get("/", (req,res) => res.render("home"));

app.listen(3000, ()=> console.log(`The server is now online`));