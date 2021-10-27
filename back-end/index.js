const express = require("express");
const cors = require("cors");
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
// Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productsRoutes");
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// mongoose connect
mongoose.connect("mongodb://localhost:27017/le-bon-plan", () => {
    console.log(`mongodb connect successfully`);
});
app.listen(port, () => {
    console.log("Server running on port: ", port);
});
