const mongoose = require('mongoose');

const publisherSchema= new mongoose.Schema( {
    name: String,
    headQuarter:String
},{ timestamps: true });

module.exports=mangoose.model("NewPublisher",publisherSchema)
    