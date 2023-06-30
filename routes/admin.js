const express = require('express');

const addForm = require('../controller/controller-admin');

const router = express.Router();

router.get('/add-product',addForm.addProductForm);

router.get('/getposts', addForm.getRestPosts);

router.get('/getposts/:varid', addForm.getParamId);

router.post('/prodpost', addForm.createPost);


router.post('/product', (req, res, next) => {
  console.log(req.body);
  res.send(req.body)
 // res.redirect('/');
});

module.exports = router;