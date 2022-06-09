//const { count } = require("console")
const BookModel= require("../models/bookModel")
const AuthorModel= require("../models/authorModel")

const createAuthor= async function (req, res) {
    let data= req.body

    let savedData= await AuthorModel.create(data)
    res.send({msg: savedData})
}
let createBook=async function (req, res) {
    let data= req.body
    let savedData= await BookModel.create(data)
    res.send({msg: savedData})
}
const listBooksByChetanBhagat= async function (req, res) {
    let data= await AuthorModel.find({author_name :"Chetan Bhagat" }).select("auther_id")
   
    let bookData=await BookModel.find({author_id:data[0].author_id})
    res.send({msg:bookData})
}
let authorOfBook=async function (req, res) {
let data=await BookModel.findOneAndUpdate({name:"Harry Porter"},{$set:{price:110}},{new:true})
let authorData=await AuthorModel.find({author_id:data.author_id}).select("author_name")
let price=data.price
//console.log(data)
res.send({msg:authorData,price})
}

const respondBack=async function (req, res) {
const data=await BookModel.find({price: {$gte:50 , $lte:100} }).select({author_id:1, _id:0})
const key=data.map(a=>a.author_id)
//console.log(key)
let newAry=[]
for (let i=0;i<newAry.length;i++){
let x=key[i]
const author=await AuthorModel.find({author_id:x}).select({author_name:1, author_id:1, _id:0})

newAry.push(author)
}
const authorName=newAry.flat()

res.send({msg:authorName})
}
// //optional
// let oldAuthor=async function(req,res){
//     let bookRating=await BookModel.find({ratings:{$gt:4}}).select({author_id:1})
//     let data=await AuthorModel.find({author_id:bookRating.author_id},{age:{$gt:50}}).select("author_name",age)
//     res.send({msg:data})
// }
// let booksById=async function(_req,res){
    
//     let z=await AuthorModel.findOne({author_name:"Chetan Bhagat"}).select({author_id:1, _id:0})
//     //console.log(z)
//     let v=await BookModel.findById({author_id:z}).select({name:1,_id:0})
//     console.log(v)
//     res.send({msg:v})
// }  






// CRUD OPERATIONS:
// CREATE
// READ
// UPDATE
// DELETE
module.exports.createBook= createBook
module.exports.createAuthor=createAuthor
module.exports.listBooksByChetanBhagat=listBooksByChetanBhagat
module.exports.authorOfBook=authorOfBook
module.exports.respondBack= respondBack
