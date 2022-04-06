const express = require("express");
const { createIndexes } = require("../models/user");
const User = require("../models/user");
let router = express.Router();

router.get("/new", (req, res) => {
  res.render("userForm");
});

router.post("/", (req, res, next) => {
  User.create(req.body, (err, savedData) => {
    if (err) {
      next(err);
    }
    res.send(`Created user : ${savedData.name} sucessfully`);
  });
});
module.exports = router;