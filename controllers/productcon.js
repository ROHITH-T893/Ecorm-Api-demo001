const Promodel=require('../models/productModel')

const get=async(req,res,next)=>{
    const product=await Promodel.find()
    res.json({
        product
    })
}
const getParm=async (req,res,next)=>{
    console.log(req.params.id);
    try{
    const product=await Promodel.findById(req.params.id)
    res.json({
        product
    })
}catch(error){
    res.json({
        success:false,
        message:error.message
})
}
}
module.exports={get,getParm}