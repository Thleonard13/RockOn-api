const express = require('express');
const productRouter = express.Router();
const productController = require('../controllers/productController')

// Returns all products from the database
productRouter.get('/', async (req, res) => {
  res.send(await productController.getAllProducts());
});

// Return products within a price range
productRouter.get('/price', async (req, res) => {
  const { minPrice, maxPrice } = req.query;
  res.send(await productController.getProductsByPrice(minPrice, maxPrice))
})

// Return products within a category
productRouter.get('/category', async (req, res) => {
  const { category } = req.query;
  res.send(await productController.getProductsByCategory(category))
})

// Return products of a specific make
productRouter.get('/make', async (req, res) => {
  const { make } = req.query;
  res.send(await productController.getProductsByMake(make))
})

// Returns single product via id
productRouter.get('/:id', async(req, res) => {
  const id = req.params.id
  res.send(await productController.getProductById(id))
})


module.exports = productRouter;