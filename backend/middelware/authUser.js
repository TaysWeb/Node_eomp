// const express = require('express');
// const bcrypt = require('bcrypt');
// const jwt = require('jsonwebtoken');
// const router = express.Router();
// const connection = require('../config/db.js');
// // User registration
// router.post('/register', async (req, res) => {
//     const { username, password } = req.body;
//     try {
//         const hashedPassword = await bcrypt.hash(password, 10);
//         const query = 'INSERT INTO Users (emailAdd,userPass) VALUES (?, ?)';
//         connection.query(query, [username, hashedPassword], (err, result) => {
//             if (err) throw err;
//             res.status(201).json({ message: 'User registered successfully' });
//         });
//     } catch (error) {
//         res.status(500).json({ error: 'Internal Server Error' });
//     }
// });


// module.exports = router;


const jwt = require("jsonwebtoken");
module.exports = {
  checkToken: (req, res, next) => {
    let token = req.get("authorization");
    if (token) {
      // Remove Bearer from string
      token = token.slice(7);
      jwt.verify(token, process.env.SECRET_KEY, (err, decoded) => {
        if (err) {
          return res.json({
            success: 0,
            message: "Invalid Token..."
          });
        } else {
          req.decoded = decoded;
          next();
        }
      });
    } else {
      return res.json({
        success: 0,
        message: "Access Denied! Unauthorized User"
      });
    }
  }
};