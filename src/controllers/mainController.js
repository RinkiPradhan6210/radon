const {response}=require('express');

const about=function(req,res){
    req.send("hello this is about page")
}
const login=function(req,res){
    req.send("hello this is login page")
}
const viewYourProduct=function(req,res){
    req.send("hello this is  viewYourProduct page")
}

module.exports.about=about;
module.exports.login=login;
module.exports.viewYourProduct=viewYourProduct;