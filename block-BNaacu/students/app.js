const express = require("express");
const app = express();
const path = require("path");
let studentsRoutes = require("./routes/students");
// telling  the application which view engine we are going to use
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));

//Some middelware  to parse form data
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// now requiring the routes
app.use("/students", studentsRoutes);
// server is listening on the port 2k21
app.listen(3000, () => {
  console.log("Server is running on  the port 3K");
});