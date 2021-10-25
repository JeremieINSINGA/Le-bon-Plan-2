const mongoose = require("mongoose");
const productSchema = new mongoose.Schema({
    name: { type: String, trim: true, required: true },
    price: Number,
    city: { type: String, trim: true, required: true, lowercase: true },
    images: Array,
    description: { type: String, trim: true, required: true },
    createdOn: { type: Date, default: new Date() },
});

module.exports = mongoose.model("products", productSchema);
