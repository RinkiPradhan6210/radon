const mongoose = require('mongoose');

const onlineUserSchema = new mongoose.Schema( {
    name:String,
    balance:{
        type:Number,
        defoult:100
    },
    address:String,
	age:Number, 
 	gender: {
        type: String,
        enum: ["male", "female", "LGBTQ"],
    isFreeAppser:{
        type:Boolean,
        defoult:false
    }, 
}
    // isIndian: Boolean,
    // parentsInfo: {
    //     motherName: String,
    //     fatherName: String,
    //     siblingName: String
    // },
    // cars: [ String  ]
}, { timestamps: true });

module.exports = mongoose.model('User', onlineUserSchema) //users



// String, Number
// Boolean, Object/json, array