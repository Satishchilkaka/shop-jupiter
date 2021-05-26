const express = require('express')
const router = express.Router()
const path = require('path')
const rootDir = require('../helper/path')

router.get('/admin/add-products', (req,res, next) => {
   // res.status(200).sendFile(path.join(rootDir, 'views', 'add-products.html'))

    res.render('add-products', {
        path: '/admin/add-products',
        pageTitle: 'Name'
    })
})

router.post('/admin/add-products', (req, res, next) => {
  //  res.render('add-products',)
res.redirect('/admin/grocery-products')
})
exports.router=router