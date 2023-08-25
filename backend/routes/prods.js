const {products} = require('../controllers/prodControl.js');

//======= Products router =======/

// Get All Product
routes.get('/Products',products.showProducts);
  
// Get Single Product
routes.get('/Products/:id', products.showProductById);
  
// Create New Product
routes.post('/AddProd', products.createProduct);
  
// Update Product
routes.put('/Products/:id', products.updateProduct);
  
// Delete Product
routes.delete('/Products/:id', products.deleteProduct);