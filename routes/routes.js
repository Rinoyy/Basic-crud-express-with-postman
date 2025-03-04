// routes/routes.js

const express = require("express");
const multer = require("multer");

const { handleInput, deleteItem,  getData,  } = require('../controllers/controller'); 
// const { handleInput, deleteItem, updateItem, getData, show } = require('../controllers/controller'); 

const router = express.Router();
const upload = multer();
const validateItem = require("../Validation/UserValidation");

// router.post("/input", validateItem, (req, res) => {
//     // Logika untuk menambahkan item ke database
//     res.status(201).json({ message: "Item berhasil ditambahkan", item: req.body });
//   });
  
router.post("/input", validateItem,   handleInput);
router.get("/get",  getData);
// router.get("/show/:id",  show);
router.delete('/items/:id', deleteItem);
// router.post('/itemsUpdate/:id', upload.none(), updateItem);

module.exports = router;
