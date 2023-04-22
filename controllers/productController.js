const Product = require("../models/productModels");

//create product

exports.createProduct = async (req, res, next) => {
  const product = await Product.create(req.body);

  res.status(201).json({
    success: true,
    product,
  });
};

//get all products
exports.getAllProducts = async (req, res) => {
  const product = await Product.find();
  res.status(200).json({
    success: true,
    product,
  });
};

//get  product details

exports.getProductDetails = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  res.status(200).json({
    success: true,
    product,
  });
};

//update product admin

exports.updateProduct = async (req, res, next) => {
  //params is a property of the req (request) object in Node.js that allows to extract parameters from the URL
  // req.params.id is used to extract the id parameter from the URL
  let product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      //retruns json response with http status code 500 indicates error if product is not found
      success: false,
      message: "Product not found",
    });
  }

  product = await Product.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
    runValidators: true,
    useFindAndMondify: false,
  });
  res.status(200).json({
    success: true,
    product,
  });
};

//delete product

exports.deleteProduct = async (req, res, next) => {
  const product = await Product.findById(req.params.id);

  if (!product) {
    return res.status(500).json({
      success: false,
      message: "Product not found",
    });
  }

  await product.deleteOne();

  res.status(200).json({
    success: true,
    message: "product deleted successfully",
  });
};
