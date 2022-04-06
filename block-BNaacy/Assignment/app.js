const express = require("express");
const app = express();
const mongoose = require("mongoose");
const path = require("path");
const User = require("./models/user");
let userRoutes = require("./routes/users");
//Establishing the  connection between the  application and the server
mongoose.connect("mongodb://127.0.0.1:27017/users", (err) => {
  console.log(err ? "Connection is failed" : "Connection is made successfully");
});
// all the middelwares
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.use(express.urlencoded({ extended: false }));
app.use("/users", userRoutes);

// listening the request on the 2K22 port


app.listen(4000, () => {
    console.log('Server is listening on port 4K')
})