const orderM=require('../models/ordersModel')
const productM=require('../models/productModel')

const post=async(req,res,next)=>{
    const cartItems=req.body
    // console.log(product);
    const amount=cartItems.reduce((a,b)=>(b.product.price*b.qnt+a),0).toFixed(2)
    const status='pendding'
    await orderM.create({cartItems,amount,status})
    //stock updating


    cartItems.forEach(async (item) => {
        const pro=await productM.findById(item.product._id)
        pro.stock=pro.stock-item.qnt
        await pro.save()
    });
    res.json({message:"response from orders",success:true})
}
const get=async(req,res,next)=>{
    const resp=await orderM.find()
    res.json({
        resp
    })
}

module.exports={post,get}