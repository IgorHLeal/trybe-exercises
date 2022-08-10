const express = require('express');
const ProductModel = require('../models/productModel');

const router = express.Router();

router.get('/', async (req, res) => {
  const products = await ProductModel.getAll();

  res.status(200).json(products);
});

router.get('/:id', async (req, res) => {
  const product = await ProductModel.getById(req.params.id);

  if (!product) return res.status(404).json({ message: 'Product not found'});

  res.status(200).json(product);
});

router.post('/', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'Informações inválidas'});

  const newProduct = await ProductModel.add(name, brand);

  res.status(201).json(newProduct);
});

router.delete('/:id', async (req, res) => {
  const products = await ProductModel.exclude(req.params.id);

  if (!products) return res.status(404).json({ message: 'Product not found'});

  res.status(200).json(products);
});

router.put('/:id', async (req, res) => {
  const { name, brand } = req.body;

  if (!name || !brand) return res.status(400).json({ message: 'Informações inválidas'});

  const products = await ProductModel.update(req.params.id, name, brand);

  if (!products) return res.status(404).json({ message: 'Product not found'});

  res.status(200).json(products);
});

module.exports = router;