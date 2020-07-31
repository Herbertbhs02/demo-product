const express = require('express');
const ejs = require("ejs");
const app = express();
const bodyParser = require("body-parser");

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: true}));
app.use(express.static("public"));


app.get('/', (req, res)=>{
  res.render('home')
})

app.get("/product1", function(req, res){
  res.render("product1");
});

app.get("/product2", function(req, res){
  res.render("product2");
});

app.get("/product3", function(req, res){
  res.render("product3");
});

app.get("/product4", function(req, res){
  res.render("product4");
});

app.get("/contact", function(req, res){
  res.render("contact");
});
const port = process.env.PORT || 3000
app.listen(port, () => console.log(`Playground app listening on port:${port}`))