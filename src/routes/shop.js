const express = require('express')
const router = express.Router()

router.get('/grocery-products', (res, req, next)  => {
    res.status(200)
    .render('grocery-products', {
        path: 'grocery-products',
        pageTitle: 'grocery-products'
    })
})

exports.router = router