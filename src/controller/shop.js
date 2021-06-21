
exports.myShop = (res, req, next)  => {
    res.status(200)
    .render('shop', {
        path: '/shop',
        pageTitle: 'My Shop'
    })
}