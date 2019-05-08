const express = require("express");
const bodyParser = require("body-parser");

const product = express.Router();

product.use(bodyParser.urlencoded());

product.get("/", (req, res) => {
    res.json({ status: 100, text: "product list will be here.." });
});

product.get("/get", (req, res) => {
    res.json({ status: 100, text: "product details will show here.." });
});

product.post("/add", (req, res) => {
    res.json({ status: 100, text: "add product working" });
});

product.get("/update", (req, res) => {
    res.json({ status: 100, text: "product is updated.." });
});

product.get("/delete", (req, res) => {
    res.json({ status: 100, text: "product is deleted.." });
});

// function to get products
function getProducts() {
    return;
};

module.exports = product;
