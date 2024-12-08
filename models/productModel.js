const mongoose=require('mongoose')
const Schema=new mongoose.Schema({
    name:String,
    price:String,
    description:String,
    rating:String,
    images:[
        {
            images:String
        }
    ],
    category:String,
    Seller:String,
    stock:Number,
    numOfReviews:String,
    createdAt:Date
})
const model=mongoose.model('product',Schema)
module.exports=model