const express = require("express");
const Category = require('../Model/category.model');
const router = express.Router();
const { body, validationResult } = require("express-validator");


//add category
router.post(
  '/add-category',
  // Validate that 'name' field exists in request body
  body("name").notEmpty().withMessage("Category name is required"),
  async (req, res) => {
    // Find validation errors
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "Failed", errors: errors.array() });
    }

    const category = new Category(req.body);
    try {
      await category.save();
      res.status(201).json({
        status: 'Success',
        data: { category }
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        message: err.message  // Send only the error message
      });
    }
  }
);



//get category
router.get('/get-category', async (req, res)=>{
  const categories = await Category.find({})
  try{
    res.status(200).json({
      status: "success",
      data : {
        categories
      }
    })
  }catch(err){
    res.status(500).json({
      status: 'Failed',
      message: err
    })
  }
})


//update category
router.patch('/update-category/:_id', async(req,res) =>{
  const updatedCategory = await Category.findByIdAndUpdate(req.params._id, req.body,{
    new: true,
    runValidators: true
  })
  try{
    res.status(200).json({
        status : 'Success',
        data : {
          updatedCategory
        }
      })
}catch(err){
    console.log(err)
}
})

module.exports = router;
