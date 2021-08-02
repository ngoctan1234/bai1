const mongoose=require('mongoose')
const productModel=require('./product.model')
const categorySchema=new mongoose.Schema({
    name:{type:String,required:true,default:"Bánh Tráng Trộn"}
},{timestamps: true})
categorySchema.pre('remove',function(next){
    // const x=await productModel.find({category:this.id})
    // console.log("test")
    // console.log(x)
    productModel.find({category:this.id},(err,products)=>{
        if(err){
            next(err)
        }
        else if(products.length>0){
            console.log("test")
            next(new Error("khong xoa duoc"))
        }
        else{
            next()
        }
    })
})
module.exports=mongoose.model('category',categorySchema)