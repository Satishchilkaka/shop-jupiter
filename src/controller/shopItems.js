
exports.shop = (res, req, next)  => {
    res.status(200)
    .render('grocery-products', {
        path: 'grocery-products',
        pageTitle: 'grocery-products'
    })
}