
exports.myShop = (req, res, next)  => {
  res.status(200)
    .render('shop', {
        path: '/shop',
        pageTitle: 'My Shop',
        activeProducts: true
    })
}

exports.getMyShopProducts = (req, res, next) => {

    res.status(200)
    .render('shopProducts', {
        path: '/shopProducts',
        pageTitle: 'Products',
        activeProducts: true

    })
}