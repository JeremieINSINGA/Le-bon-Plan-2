const productModel = require("../models/productModel");

module.exports = {
    findOneProduct: async (req, res) => {
        try {
            const productId = req.params.id;
            const product = await productModel.findById(productId);
            res.status(200).send(product);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    findAllProducts: async (req, res) => {
        try {
            const productCity = req.params.city;
            const products = await productModel.findOne({ city: productCity });
            res.status(200).send(products);
        } catch (error) {
            res.status(500).send(error);
        }
    },
    addOneProduct: (req, res) => {
        try {
            const photos = req.files;
            console.log(photos, "Photos arrived");
            const productData = req.body;
            photos.forEach((photo) => productData.image.push(photo.filename));
            productModel.create(productData);
            res.status(200).send("product added");
        } catch (error) {
            res.status(500).send(error);
        }
    },
    modifyOneProduct: (req, res) => {
        try {
            const productData = req.body;
            productModel.updateOne(
                { _id: productData._id },
                { $set: productData }
            );
        } catch (error) {
            res.status(500).send(error);
        }
    },
};
