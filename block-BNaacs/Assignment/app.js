var express = require('express');
var app = express();
var path = require('path');

//which template engine we are  using .
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));




// Handling  the /route
app.get('/', (req,res) => {
    res.render('school', {name:'AltCampus'})
})

app.get('/about', (req,res) => {
    var school = {name: "Atcampus", were:"Khaniyara Dharamshala"};
    res.render('about', {school: school});
})


// Running the server on 2k20 port
app.listen(2000, () => {
    console.log("Server is running on the port 2K");
});