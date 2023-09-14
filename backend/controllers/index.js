const express = require('express');
const bodyParser = require('body-parser');
const routes = express.Router()
// Import all model's objects
const {users, products} = require('../models/') ;


// //======= User's router =======

// routes.get('/Users', (req, res)=>{
//     users.fetchUsers(req, res)
// })
// routes.get('/Users/:id', (req, res)=>{
//     users.fetchUser(req, res)
// })
// routes.post('/register', bodyParser.json(),
//     (req, res)=> {
//         users.register(req, res)
//     })
// routes.put('/UserUpdate/:id', bodyParser.json(),
//     (req, res)=>{
//         users.updateUser(req, res)
//     })
// // routes.patch('/user/:id', bodyParser.json(),
// //     (req, res)=>{
// //         users.updateUser(req, res)
// //     })
// routes.delete('/UserDelete/:id', (req, res)=>{
//     users.deleteUser(req, res)
// })

// Get All Product
routes.get('/Products',products.showProducts );
  
// Get Single Product
routes.get('/Products/:id', products.showProductById);
  
// Create New Product
routes.post('/AddProd', products.createProduct);
  
// Update Product
routes.put('/Products/:id', products.updateProduct);
  
// Delete Product
routes.delete('/Products/:id', products.deleteProduct);




module.exports = {express, routes} ;