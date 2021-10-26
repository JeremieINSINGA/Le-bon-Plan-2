const express = require("express");
const port = process.env.PORT || 3001;
const app = express();
const mongoose = require("mongoose");
const exphbs = require("express-handlebars");
app.engine("handlebars", exphbs());
app.set("view engine", "handlebars");

// Routes
const userRoutes = require("./routes/userRoutes");
const productRoutes = require("./routes/productsRoutes");
app.use(express.urlencoded({ extended: true }));
app.use(express.static("assets"));
app.use(express.json());
app.use("/users", userRoutes);
app.use("/products", productRoutes);

// mongoose connect
mongoose.connect("mongodb://localhost:27017/le-bon-plan", () => {
    console.log(`mongodb connect successfully`);
});
app.get("/", (req, res) => {
    res.render("form");
});
app.listen(port, () => {
    console.log("Server running on port: ", port);
});
