const express = require("express");

const productModel = require("../models/productModel");

const product = express.Router();

// api request to add single product. 
product.post("/add", (req, res) => {

    const productData = {
        p_name: req.body.p_name,
        p_price: req.body.p_price,
        p_quantity: req.body.p_quantity,
        p_company: req.body.p_company,
        p_country: req.body.p_country,
        p_category: req.body.p_category,
        p_description: req.body.p_description
    };

    const newProduct = new productModel(productData);
    newProduct
        .save()
        .then((data) => {
            res.status(200).json({
                data: data,
                text: "add product working"
            });
        })
        .catch((err) => {
            res.status(404).json({
                text: "Product not added, Error occured",
                error: err
            });
        });
});

// api request to get list of all product and their details also.
product.get("/", (req, res) => {
    productModel
        .find()
        .then((productList) => {
            res.status(200).json({ productList });
        })
        .catch((err) => {
            res.status(404).json({
                text: "Error occurred when fetching product list",
                error: err
            });
        });
});

// api request to get specific product details.
product.get("/:p_id", (req, res) => {
    const p_id = req.params.p_id;
    productModel
        .findOne({ _id: p_id })
        .then((productList) => {
            res.status(200).json(productList);
        })
        .catch((err) => {
            res.status(406).json({
                text: "Error occurred when fetching product details",
                error: err
            });
        });
});

// api request to update single product. 
product.post("/update", (req, res) => {
    const p_id = req.body.p_id;
    const updatedProductData = {
        p_name: req.body.p_name,
        p_price: req.body.p_price,
        p_quantity: req.body.p_quantity,
        p_company: req.body.p_company,
        p_country: req.body.p_country,
        p_category: req.body.p_category,
        p_description: req.body.p_description
    };

    productModel
        .updateOne({ _id: p_id }, updatedProductData)
        .then((data) => {
            res.status(200).json({
                text: "product is updated.."
            });
        })
        .catch((err) => {
            res.status(406).json({
                text: "Product not updated, Error occured",
                error: err
            });
        });
});

// api request to delete single product. 
product.post("/delete", (req, res) => {
    const p_id = req.body.p_id;
    productModel
        .findByIdAndDelete({ _id: p_id })
        .then((data) => {
            res.status(200).json({ data, text: "product is deleted.." });
        })
        .catch((err) => {
            res.status(406).json({
                text: "Error occurred when deleting product!",
                error: err
            });
        });
});

module.exports = product;
