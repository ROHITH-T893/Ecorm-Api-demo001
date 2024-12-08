const mongoose=require('mongoose')
const Schema=new mongoose.Schema({
    cartItems:Array,
    amount:String,
    status:String,
    createdAt:Date
})

const model=mongoose.model('orders',Schema,"Orders")
module.exports=model