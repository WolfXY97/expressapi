const express = require('express');
const router = express.Router();
const ProductsService = require('../services/products.service');
const service = new ProductsService();

router.get('/', async (req, res) => {
    const products = await service.find();
    res.status(200).json(products)
});

//GET: Recibir parámetros
//Los EndPoints específicos deben ir antes que los dinámicos
router.get('/filter', async (req, res) => {
  res.send('Filter activado');
})


router.get('/:id', async (req, res) => {
  const { id } = req.params;
  const products = await service.findOne(id);
  res.json(products);
});

router.post('/', async (req, res) => {
  const body = req.body;
  const result = await service.create(body);
  res.status(201).json(result);
} );

router.patch('/:id', async (req, res) => {
  try{
    const { id } = req.params;
    const body = req.body;
    const productUpdated = await service.update(id, body);
    res.json(productUpdated);
  }catch(err){
    res.status(404).json({
      message: err.message
    })
  }
});

router.delete('/:id', async (req, res) => {
  const { id } = req.params;
  const result = await service.delete(id);
  res.json(result);
});

module.exports = router;
