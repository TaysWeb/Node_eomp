
const db = require('../config/db.js');
  
// Get All Products
export const getProducts = (result) => {
    db.query("SELECT prodID, prodName ,quantity, amount, Category, prodUrl FROM product", (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Get Single Product
export const getProductById = (id, result) => {
    db.query("SELECT prodID, prodName ,quantity, amount, Category, prodUrl  FROM product WHERE prodID = ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results[0]);
        }
    });   
}
  
// Insert Product to Database
export const insertProduct = (data, result) => {
    db.query("INSERT INTO product SET ?", [data], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        }
    });   
}
  
// Update Product to Database
export const updateProductById = (data, id, result) => {
    db.query("UPDATE product SET prodID = ?, prodName = ?, quantity = ?, amount= ? , Category= ?, prodUrl = ?  WHERE product_id = ?", [data.prodID, data.prodName, data.quantity, data.amount, data.Category, data.prodUrl,  id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
            console.log("Record was updated Successfully");
        }
    });   
}
  
// Delete Product to Database
export const deleteProductById = (id, result) => {
    db.query("DELETE FROM product WHERE prodID= ?", [id], (err, results) => {             
        if(err) {
            console.log(err);
            result(err, null);
        } else {
            result(null, results);
        
        }
    });   
}
