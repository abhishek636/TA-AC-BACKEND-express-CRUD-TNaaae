const { resolveSoa } = require("dns");
const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/user");
// Requiring all the routes  from the routes directory 
const standAloneRoutes= require('./routes/index');  
let userRoutes = require("./routes/users");

//Establishing the  connection between the  application and the server
mongoose.connect("mongodb://127.0.0.1:27017/users", (err) => {
  console.log(err ? "Connection is failed" : "Connection is made successfully");
});
// all the middelwares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname+'/public'));

app.use("/users", userRoutes);
app.use(standAloneRoutes);

// Error handling 
app.use((err ,req , res ,next)=>{
  res.send(err);
  next();
});

// listening the request on the 2K22 port
app.listen(2000, () => {
  console.log("Server is listening on the port 2K");
});