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

exports.routes = router
