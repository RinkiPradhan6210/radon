const express = require('express');
const router = express.Router();
const userController= require("../controllers/userController")
const middlewr= require("../middleware/auth")

router.get("/test-me", function (req, res) {
    res.send("My first ever api!")
})

router.post("/users", userController.createUser)

router.post("/login", userController.loginUser)

//The userId is sent by front end
router.get("/users/:userId",middlewr.mid1, userController.getUserData)
//router.post("/users/:userId/posts",middlewr.mid1, userController.postMessage)

router.put("/users/:userId",middlewr.mid1, userController.updateUser)
router.delete('/users/:userId',middlewr.mid1, userController.deleteUser)
//router.delete('/users/:userId/posts',middlewr.mid1, userController.deletePostMessage)

module.exports = router;