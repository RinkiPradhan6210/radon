const jwt = require("jsonwebtoken");
//authentication
const mid1 = function (req, res, next) {
    //check the token in request header
    //validate this token
    let token = req.headers["x-Auth-token"];
    if (!token) token = req.headers["x-auth-token"];

    //If no token is present in the request header return error
    if (!token) return res.send({ status: false, msg: "token must be present" });

    console.log(token)
    let decodedToken = jwt.verify(token, "functionup-radon");
    if (!decodedToken)
        return res.send({ status: false, msg: "token is invalid" });
        
    let userToBeModified = req.params.userId
    let userLoggedIn = decodedToken.userId
    if (userToBeModified != userLoggedIn){ return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data'})
}else{
    next()
}
};

module.exports.mid1 = mid1;
// //authorization
// const mid2 = function (req, res, next) {
//     let userToBeModified = req.params.userId
//     //userId for the logged-in user
//     let userLoggedIn = decodedToken.userId

//     //userId comparision to check if the logged-in user is requesting for their own data
//     if (userToBeModified != userLoggedIn) return res.send({ status: false, msg: 'User logged is not allowed to modify the requested users data' })



//     next()
// };



// const authorise = function(req, res, next) {
//     // comapre the logged in user's id and the id in request
//     next()
// }