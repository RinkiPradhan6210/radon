
const login= function ( req, res, next) {
    //req.falana= "hi there. i am adding something new to the req object"
    res.send("Hi I am a middleware named Mid1")
    next()
}

const feed= function ( req, res, next) {
    res.send("Hi I am a middleware named Mid2")
    next()
}

const view= function ( req, res, next) {
    res.send("Hi I am a middleware named Mid3")
    next()
}

const viewProduct= function ( req, res, next) {
    res.send("Hi I am a middleware named Mid4")
    next()
}

module.exports.login= login
module.exports.feed= feed
module.exports.view= view
module.exports.viewProduct= viewProduct
