const products = require('../models/product')

exports.myShop = (req, res, next) => {
    res.status(200)
        .render('shop', {
            path: '/shop',
            pageTitle: 'My Shop',
            activeProducts: true
        })
}

exports.getMyShopProducts = (req, res, next) => {
    Product.fetchAll(products => {
        res.status(200)
            .render('shop-products', {
                productName: products.title,
                path: '/shop-products',
                pageTitle: 'Products',
                activeProducts: true

            });
    });
    // console.log(products)
};