const express = require('express');
const routerAipi = require('./routes');

const app = express();
const port = 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Hola, mi server en express');
});

app.get('/nueva-ruta', (req, res) => {
  res.send('Hola, esta es una nueva ruta');
});

routerAipi(app);

// app.get('/products', (req, res) => {
//   const products = [];
//   const { size } = req.query;
//   const limit = size || 10;
//   for (let index = 0; index < size; index++) {
//     products.push({
//       name: faker.faker.commerce.productName(), 
//       price: parseInt(faker.faker.commerce.price(), 10),
//       image: faker.faker.image.url()
//     });
//   };
//   res.json(products);
// });

// //GET: Recibir parámetros
// //Los EndPoints específicos deben ir antes que los dinámicos
// app.get('/products/filter', (req, res) => {
//   res.send('Filter activado');
// })


// app.get('/products/:id', (req, res) => {
//   const { id } = req.params;
//   res.json({
//     id,
//     name: 'Laptop',
//     price: 1500
//   })
// });

// app.get('/categories/:categoryId/products/:productId', (req, res) => {
//   const { categoryId, productId } = req.params
//   res.json({
//     categoryId,
//     productId,
//     price: 2000
//   })
// });

// app.get('/categories/:categoryId', (req, res) => {
//   const { categoryId } = req.params;
//   res.json({
//       categoryId,
//       category: 'Computers & Accesories'
//   });
// });

//Queries params
//Son parámetros de consultas que suelen venir en los parámetros get. Parámetros tipos queries (A veces opcionales). 
//Me permite realizar ciertos comportamientos como paginado, filtros, etc.

// app.get('/users', (req, res) => {
//   const { limit, offset } = req.query;
//   if(limit && offset) {
//     res.json({
//       limit,
//       offset
//     });
//   }
//   res.send('No hay parámetros');
// });


app.listen(port, () => {
  console.log('Running on port: ' + port);
});

