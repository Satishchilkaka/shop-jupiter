const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helper/path')

router.get('/admin/add-products', (req,res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'add-products.html'))
})

router.post('/admin/add-products', (req, res, next) => {
res.redirect('/admin/grocery-products')
})
exports.router=router