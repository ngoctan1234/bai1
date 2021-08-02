const express=require('express')
const categoryModel=require('../models/category.model')
const productModel=require('../models/product.model')
const router=express.Router()
router.get('/',async(req,res)=>{
    const products=await productModel.find().populate('category',['name'])

    res.render('products/list',{products:products})
})
router.get('/add',async(req,res)=>{
    try{
        const product=new productModel()
        const categories=await categoryModel.find()
        res.render('products/add',{categories:categories,product:product})
    }catch(e){
        console.log(e)
        res.redirect('/')
    }
    
})
router.post('/',async(req,res)=>{
  try{
      const product=new productModel({
          name:req.body.name,
          price:req.body.price,
          quantity:req.body.quantity,
          info:req.body.info,
          category:req.body.category
      })
      
      await product.save()
    res.redirect('/product')
  }catch(e){
    console.log(e)
    res.redirect('/')
  }
})

router.delete('/:id',async(req,res)=>{

  try{
   const product=await productModel.findById(req.params.id)
   product.remove()
      res.redirect('/product')
}catch(e){
 console.log(e)
 res.redirect('/')
}
})

module.exports=router