const authorModel = require("../models/authorModel")
const bookModel= require("../models/bookModel")

const createBook= async function (req, res) {
   // let book = req.body
   let requestId=req.body.author_id
   console.log(requestId)
   if(!requestId){
       res.send({msg:"AuthorId is required"})
   }else{
       let authorId=await authorModel.findById(requestId)
       console.log(authorId)
       if(!authorId){
           res.send({msg:"not a valid author id"})
       }else{
           res.send({data:bookCreated})
       }
   }
   }
 
const updateBook= async function (req, res) {
    let update = await bookModel.findByIdAndUpdate({_id:req.body.book_id},{$set:{isHardCover:req.body.isHardCover}},{upsert:true})
    res.send(update)
}
const getBooksData= async function (req, res) {
    let books = await bookModel.find()
    res.send({data: books})
}

const getBooksWithAuthorDetails = async function (req, res) {
    let specificBook = await bookModel.find().populate('author_id')
    res.send({data: specificBook})

}

module.exports.createBook= createBook
module.exports.getBooksData= getBooksData
module.exports.getBooksWithAuthorDetails = getBooksWithAuthorDetails
module.exports.updateBook= updateBook