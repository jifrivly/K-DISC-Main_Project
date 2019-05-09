const express = require("express");
const bodyParser = require("body-parser");

const productModel = require("../models/productModel");

const product = express.Router();

product.use(bodyParser.urlencoded());

product.get("/", (req, res) => {
    res.status(200).json({
        text: "product list will be here.."
    });
});

product.get("/get", (req, res) => {
    res.status(200).json({
        text: "product details will show here.."
    });
});

product.post("/add", (req, res) => {
    productData = {
        p_name: req.body.p_name,
        p_price: req.body.p_price,
        p_quantity: req.body.p_quantity,
        p_company: req.body.p_company,
        p_country: req.body.p_country,
        p_category: req.body.p_category,
        p_description: req.body.p_description
    };

    var productData = new productModel(productData);
    productData
        .save()
        .then((data) => {
            res.status(200).json({
                data: data,
                text: "add product working"
            });
        })
        .catch((err) => {
            res.status(304).json({
                error: err,
                text: "Product not added, Error occured"
            });
        });
});

product.get("/update", (req, res) => {
    res.status(200).json({
        text: "product is updated.."
    });
});

product.get("/delete", (req, res) => {
    res.status(200).json({
        text: "product is deleted.."
    });
});

// function to get products
function getProducts() {
    return;
}

module.exports = product;
