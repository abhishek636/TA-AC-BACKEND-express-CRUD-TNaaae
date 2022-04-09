const express = require("express");
const { createIndexes } = require("../models/user");
const User = require("../models/user");
let router = express.Router();

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, savedData) => {
    if (err) return res.redirect("/users/new");
    res.redirect("/");
  });
});

// to show a single user  or to get a single result form the database
//based on some query
router.get("/:id", (req, res, next) => {
  let id = req.params.id;
  User.findById(id, (err, user) => {
    if (err) return next(err);
    res.render("singleuser", { user: user });
  });
});

// to show all the user on the /users route  in the alluser page in the
// form of a table
router.get("/", (req, res, next) => {
  User.find({}, (err, users) => {
    if (err) return next(err);
    res.render("users", { users: users });
  });
});
module.exports = router;