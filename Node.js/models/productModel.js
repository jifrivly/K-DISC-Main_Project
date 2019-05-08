const mongoose = require("mongoose");

mongoose
    .connect("mongodb://localhost:27017/shopDB")
    .then(() => {
        console.log("Database connection successful");
    })
    .catch((err) => {
        console.log("Error occured in Database connection, " + err);
    });

const productSchema = new mongoose.Schema({
    p_name: String,
    p_price: Number,
    p_quantity: Number,
    p_company: String,
    p_country: String,
    p_category: String,
    p_description: String
});

module.exports = mongoose.model("product", productSchema);
