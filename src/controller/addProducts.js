exports.addProduct = (req,res, next) => {
       res.render('add-products', {
         path: '/admin/add-products',
         pageTitle: 'Add product',
         activeProducts: true
     })
 }

exports.redirectToShop = (req, res, next) => {
    //  res.render('add-products',)
  res.status(200)
  .render('grocery-products', {
    path:'/grocery-products',
    pageTitle: 'prod'
  })
  console.log(req.body)
  }