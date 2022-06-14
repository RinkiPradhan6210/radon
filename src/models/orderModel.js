const mongoose = require('mongoose');
const ObjectId=mangoose.Schema.Types.ObjectId
const orderSchema = new mongoose.Schema( {
    userId:{
        type:ObjectId,
        ref:"User"
    },
    productId:{
        type:ObjectId,
        ref:"Product"
    },
    amount:Number,
    isfreeappuser:Boolean,
    date:{
        type:Date,
        default:Date.new()
    }

}, { timestamps: true });

module.exports = mongoose.model('Order',  orderSchema)
