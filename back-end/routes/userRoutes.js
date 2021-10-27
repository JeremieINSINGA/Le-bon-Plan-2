const express = require("express");
const multer = require("multer");
const path = require("path");
const upload = multer({ dest: path.join(__dirname, "../assets/img/") });
const {
    signUpUser,
    loginUser,
    findUser,
    modifyUser,
} = require("../controllers/userControllers");
const router = express.Router();

// User Post Routes
router.post("/signup", upload.single("avatar"), signUpUser);
router.post("/login", loginUser);

// User Get Routes
router.get("/user/:username", findUser);

// modify one user
router.put("/user/:id", modifyUser);

module.exports = router;
