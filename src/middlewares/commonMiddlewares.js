

const checkHeader = function (req, res, next){
    let header = req.headers.isfreeappuser
    if (!header) {
        res.send({ msg: "request is missing a mandatory header" })
    }
    else {
        next()
    }
}
const orderPurchase=function(req,res,next){
    let order=req.headers.isfreeappuser
    if (!order) {
        res.send({ msg: "request is missing a mandatory header" })
    }
    else {
        next()
    }
}
module.exports.checkHeader = checkHeader
module.exports.orderPurchaser = orderPurchase




