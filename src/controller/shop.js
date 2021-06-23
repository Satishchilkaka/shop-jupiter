
exports.myShop = (req, res, next)  => {
  
    res.render('shop', {
        path: '/shop',
        pageTitle: 'My Shop',
        activeProducts: true
    })
}
