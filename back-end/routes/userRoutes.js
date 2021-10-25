const express = require("express");

const {
    signUpUser,
    loginUser,
    findUser,
    modifyUser,
} = require("../controllers/userControllers");
const router = express.Router();

// User Post Routes
router.post("/signup", signUpUser);
router.post("/login", loginUser);

// User Get Routes
router.get("/user/:username", findUser);

// modify one user
router.put("/user/:id", modifyUser);

module.exports = router;
