const express = require('express');
const router = express.Router();
//const BookModel=require("../models/bookmodel")

const BookController= require("../controllers/bookController")



router.post("/createBook", BookController.createBook  )

router.get("/bookList", BookController.bookList)
router.post("/ getBooksInYear", BookController. getBooksInYear)
 router.post("/getParticularBooks", BookController.getParticularBooks)
 router.get("/getXINBook", BookController.getXINBook)
 router.get("/getRandomBooks", BookController.getRandomBooks)

module.exports = router;