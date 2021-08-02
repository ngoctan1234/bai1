const mongoose=require('mongoose')
const productSchema=new mongoose.Schema({
    name:{type:String,require:true,default:"Táo"},
    info:{type:String,default:"Táo nhà trồng"},
    quantity:{type:Number,require:true,default:5},
    price:{type:Number,require:true,default:20000},
    category:{type:mongoose.Schema.Types.ObjectId,require:true,ref:"category"},
},{timestams:true})
module.exports=mongoose.model('product',productSchema)