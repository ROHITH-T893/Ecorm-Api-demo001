const express=require('express')
const { post,get} = require('../controllers/orders')
const router=express.Router()

router.route('/orders').post(post).get(get)
// router.route('/orders/:id').get(getParms)

module.exports=router