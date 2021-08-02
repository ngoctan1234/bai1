const express=require('express')
const categoryModel=require('../models/category.model')
const router=express.Router()
router.get('/',async(req,res)=>{
    const categories=await categoryModel.find()

    res.render('categories/list',{categories:categories})
})
router.delete('/:id',async(req,res)=>{

     try{
      const category=await categoryModel.findById(req.params.id)
      category.remove()
         res.redirect('/category')
  }catch(e){
    console.log(e)
    res.redirect('/')
  }
})
router.get('/add',(req,res)=>{
    res.render('categories/add')
})
router.post('/',async(req,res)=>{
  try{
      const category=new categoryModel({
          name:req.body.name
      })
      
      await category.save()
    res.redirect('/category')
  }catch(e){
    console.log(e)
    res.redirect('/')
  }
})
module.exports=router