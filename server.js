const express=require('express')
const expressLayouts=require('express-ejs-layouts')
const indexRouter=require('./routes/index')
const categoryRouter=require('./routes/category')
const productRouter=require('./routes/product')
const methodOverride = require('method-override')
const mongoose=require('mongoose')
require('dotenv').config()
const connectFunction=async()=>{
try{
    await mongoose.connect(process.env.STR_CONNECT)
    console.log("connected successfully")
}catch(e){
    console.log('connection failed')
    console.log(e.message)
}}
connectFunction()
const app= express()
app.set('view engine', 'ejs')
app.use(expressLayouts)
app.set('layout','layouts/layout')
app.use(express.static('public'))
app.use(express.urlencoded({ extended: false }))
app.use(methodOverride('_method'))

app.use('/',indexRouter)
app.use('/category',categoryRouter)
app.use('/product',productRouter)

app.listen(3000)