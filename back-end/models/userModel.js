const mongoose = require("mongoose");
const userSchema = new mongoose.Schema({
    email: { type: String, required: true, trim: true },
    firstName: {
        type: String,
        trim: true,
        required: true,
    },
    lastName: { type: String, trim: true },
    username: {
        type: String,
        trim: true,
        lowercase: true,
        required: true,
        unique: true,
        index: true,
    },
    password: { type: String, trim: true, required: true },
    createdOn: { type: Date, default: new Date() },
});
module.exports = mongoose.model("users", userSchema);
