const express = require('express')
const router = express.Router()
const gShopRoute = require('../controller/shopItems')

router.get('/grocery-products', gShopRoute.shop )

exports.router = router