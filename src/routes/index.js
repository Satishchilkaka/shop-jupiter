const express = require ('express')
const path = require('path')
const router = express.Router()
const rootDir = require('../helper/path')

router.get('/', (req, res, next) => {
    res.sendFile(path.join(rootDir, 'views', 'index.html'))
})
router.get('/grocery-products', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'grocery-products.html'))
})
router.get('/home-appliance', (req, res, next) => {
    res.status(200).sendFile(path.join(rootDir, 'views', 'home-appliance.html'))
})

exports.routes = router
