const userModel = require("../models/userModel");

module.exports = {
    signUpUser: async (req, res) => {
        console.log(req.body);
        res.send("ok");
        // try {
        //     const userData = req.body;
        //     const isExist = await userModel.findOne({
        //         username: userData.username,
        //     });
        //     if (isExist) {
        //         res.status(400).send({ error: "The user already exist" });
        //     } else {
        //         console.log(userData);
        //         // userModel.create(userData).catch(console.error);
        //         res.status(200).send("signup successfully");
        //     }
        // } catch (error) {
        //     res.status(500).send(error);
        // }
    },
    loginUser: async (req, res) => {
        try {
            const userData = req.body;
            const user = await userModel.findOne({
                username: userData.username,
            });
            if (!user) {
                return res
                    .status(404)
                    .send({ error: "the user name does not exist" });
            }
            if (userData.password === user.password) return res.send("ok");
            else return res.status(401).send("The password is incorrect");
        } catch (error) {
            res.status(500).send(error);
        }
    },
    findUser: async (req, res) => {
        try {
            const userData = req.body;
            const user = await userModel.findById(userData._id);
            if (user) {
                return res.status(200).send(user);
            } else return res.status(404).send({ error: "user not found " });
        } catch (error) {
            res.status(500).send(error);
        }
    },
    modifyUser: async (req, res) => {
        try {
            const userData = req.body;
            const user = await userModel.findOne({
                username: userData.username,
            });
            if (user) {
                return res.status(200).send(user);
            } else
                return res.status(404).send({ error: "user does not exist" });
        } catch (error) {
            res.status(500).send(error);
        }
    },
};
