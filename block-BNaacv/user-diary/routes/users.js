const express = require('express');
let router = express.Router();

router.get('/',(req ,res)=>{
    res.render('users',{ list: ["ankit", "suraj", "prashant", "ravi"] });
})

router.get('/new',(req ,res)=>{
    res.render('userForm');
})

router.get('/:id',(req ,res)=>{
    res.render('singleUser',{ name: "Abhishek", email: "abhishekbhatt9011@gmail.com" });
})


router.get('/:id/edit',(req,res) => {
    //edit form
})
 
router.put('/:id',(req,res) => {
    //capture the data from the update form
})
  
router.delete('/:id', (req,res) => {
    //delete that user
})

router.put('/:id',(req ,res)=>{

})
module.exports = router;