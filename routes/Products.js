const express=require('express')
const get = require('../controllers/productcon')
const router=express.Router()
router.route('/produc').get(get.get)
router.route('/products/:id').get(get.getParm)

module.exports=router