const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helper/path')
const addProductsToShop = require('../controller/addProducts')

router.get('/admin/add-products', addProductsToShop.addProduct)

router.post('/shop-products', addProductsToShop.addProductToShop)

exports.router = router