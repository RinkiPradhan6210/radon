const { count } = require("console")
const orderModel = require("../models/orderModel")
const  userModel= require("../models/orderModel")
const  productModel= require("../models/productModel")

const createOrder= async function (req, res) {
    let data = req.body
    let userId = data.userId
    let productId = data.productId
    let userPresent =await userModel.findById(userId)
    if(!userPresent) return res.send({status:false,msg:"user not present"})
    let productPresent =await productModel.findById(productId)
    if(!productPresent) return res.send({status:false,msg:"product not present"})
    if(!req.isfreeappuser && userpresent.balance >=productPresent.prices){
        await userpresent.save()
        data.amount=productPresent.prices
        data.isfreeappuser=false
        let  Ordercreate=await orderModel.create(data)
        return res.send({status:true,data:Ordercreate})
    }else if(!req.apptypeFree){
        return res.send({status:true,msg:"not enough money"})
    }else if(!req.apptypeFree){
        return res.send({status:true,msg:"not enough money"})   
    }
    }
    

   

module.exports.createOrder= createOrder
