const productName = []

exports.addProduct = (req, res, next) => {
  res.render('add-products', {
    path: '/admin/add-products',
    pageTitle: 'Add product',
    activeProducts: true
  })
}

exports.addProductToShop = (req, res, next) => {
  const product = JSON.stringify(req.body)
  productName.push(product)
  res.status(200)
    .render('shop-products', {
      path: '/shop-products',
      pageTitle: 'Products',
      productName: productName[0]
    })

  const pName = productName
  //console.log(pName)

}
