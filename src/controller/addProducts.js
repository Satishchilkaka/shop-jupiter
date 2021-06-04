
exports.addProduct = (req,res, next) => {
       res.render('add-products', {
         path: '/admin/add-products',
         pageTitle: 'Add product',
         activeProducts: true
     })
 }

exports.redirectToShop = (req, res, next) => {
    //  res.render('add-products',)
  res.redirect('/grocery-products', {
      path: '/grocery-products',
      pageTitle: 'grocery-products',
      activeGroceryProducts: true
  })
  }