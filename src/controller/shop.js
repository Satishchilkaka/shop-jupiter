
exports.myShop = (req, res, next) => {
    res.status(200)
        .render('shop', {
            path: '/shop',
            pageTitle: 'My Shop',
            activeProducts: true
        })
}

exports.getMyShopProducts = (req, res, next) => {

    res.status(200)
        .render('shop-products', {
            path: '/shop-products',
            pageTitle: 'Products',
            activeProducts: true

        })
}