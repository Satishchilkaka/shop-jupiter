const express = require('express')
const app = express()
const path = require('path')
const rootDir = require('./helper/path')
const indexRoute = require('./routes/index')
const adminRoute = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')))


app.set('view engine', 'ejs')
app.set('views', 'views')

app.use(indexRoute.routes)
app.use(adminRoute.router)
app.use('',(req, res, next) => {
    res.render('404', {
        path:'/404',
        pageTitle: 'Page not found'
    })
   // res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
app.listen(3000)