const express = require('express')
const router = express.Router()
const myShopRoute = require('../controller/shop')


router.get('/', myShopRoute.myShop)

router.get('/shopProducts', myShopRoute.getMyShopProducts)


module.exports = router;