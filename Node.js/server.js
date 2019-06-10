const express = require("express");
const chalk = require("chalk");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");

const adminRouter = require("./admin/admin");
const userRouter = require("./users/user");
const productRouter = require("./products/product");

my_app = express();

// mongoDB connection setup
mongoose
	.connect("mongodb://localhost:27017/shopDB", {
		useNewUrlParser: true
	})
	.then(() => {
		console.log("Database connection successful");
	})
	.catch((err) => {
		console.log("Error occured in Database connection, " + err);
	});

my_app.use(bodyParser.urlencoded({
	extended: false
}));
my_app.use(bodyParser.json());

my_app.use(function (req, res, next) {
	res.header("Access-Control-Allow-Origin", "*");
	res.header("Access-Control-Allow-Methods", "GET, POST, PATCH, PUT, DELETE, OPTIONS");
	res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
	next();
});

my_app.use("/admin", adminRouter);
my_app.use("/user", userRouter);
my_app.use("/product", productRouter);

my_app.get("/", (req, res) => {
	res.status(404).json({
		status: "200",
		text: "API Working use another routes, '/user', '/product' etc. "
	});
});


const port = process.env.PORT || 4545;
my_app.listen(port, () => {
	console.log(chalk.red("Backend is working on port : " + port));
});