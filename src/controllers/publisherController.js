const publishModel = require("../models/publisherModel")

let getPublish=async function(req,res){
    let data=req.body
    let bookCreated = await publishModel.create(data)
    res.send({data: bookCreated})
}
module.exports.getPublish= getPublish