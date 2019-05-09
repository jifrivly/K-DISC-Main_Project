const mongoose = require("mongoose");

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
