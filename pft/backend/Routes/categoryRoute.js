const express = require("express");
const Category = require('../Model/category.model');
const router = express.Router();
const { body, validationResult } = require("express-validator");


//add category
router.post(
  '/add-category',
  [
    body("name").notEmpty().withMessage("Category name is required"),
    body("category").notEmpty().withMessage("Category type is required"),
    body("description").notEmpty().withMessage("Description is required"),
    body("type")
      .custom((value, { req }) => {
        if (req.body.category === "Expense" && !value) {
          throw new Error("Type is required for Expense category");
        }
        return true;
      })
      .optional(),
  ],
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      return res.status(400).json({ status: "Failed", errors: errors.array() });
    }

    const category = new Category(req.body);
    try {
      await category.save();
      res.status(201).json({
        status: 'Success',
        data: { category },
      });
    } catch (err) {
      res.status(500).json({
        status: 'Failed',
        message: err.message,
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
router.put('/update-category/:_id', async(req,res) =>{
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



//delete category

router.delete('/delete-category/:_id', async(req,res) => {
  await Category.findByIdAndDelete(req.params._id)
  
  try{
    res.status(204).json({
        status : 'Success',
        data : {}
    })
  }catch(err){
      res.status(500).json({
          status: 'Failed',
          message : err
      })
  }
})


router.put('/update-type/:_id', async(req,res) =>{
  const updatedType = await Category.findByIdAndUpdate(req.params._id, req.body,{
    new: true,
    runValidators: true
  })
  try{
    res.status(200).json({
        status : 'Success',
        data : {
          updatedType
        }
      })
}catch(err){
    console.log(err)
}
})


module.exports = router;
