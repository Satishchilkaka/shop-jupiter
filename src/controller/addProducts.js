const productName = []

exports.addProduct = (req,res, next) => {
       res.render('add-products', {
         path: '/admin/add-products',
         pageTitle: 'Add product',
         activeProducts: true
     })
 }

exports.redirectToShop = (req, res, next) => {
    //  res.render('add-products',)
    const product = JSON.stringify(req.body)
  productName.push(product)
  res.status(200)
  .render('grocery-products', {
    path:'/grocery-products',
    pageTitle: 'prod',
    productName: productName[0]
  })
  
  const pName = productName[0].addProduct

  }
 