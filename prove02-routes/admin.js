const path = require('path');

const express = require('express');

const router= express.Router();

const products = [];

router.use('/', (req, res, next) => {
    res.sendFile(path.join(__dirname, '../', 'views-prove02', 'add-product.html'));
});

router.get('/add-product', (req, res, next) => {
    console.log('In /add-product middleware!');
    res.send('<form action="/admin/add-product" method="POST"><input type="text" name="title"><button type="submit">Add Product</button></form>')
});

router.post('/add-product', (req, res, next) => {
    products.push({title: req.body.title});
    res.redirect('/');
});

exports.routes = router;
exports.products = products;