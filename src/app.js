const express = require('express')
const app = express()
const path = require('path')
const rootDir = require('./helper/path')
const indexRoute = require('./routes/index')
const adminRoute = require('./routes/admin')
const pageNotFound = require('./controller/error')
const shopRoute = require('./routes/shop')
const bodyParser = require('body-parser')
app.use(express.static(path.join(__dirname, 'public')))


// app.set('views', 'views')
app.set('views', path.join(__dirname, 'views'));

app.use(bodyParser.urlencoded({extended: false}))

app.set('view engine', 'ejs');  
app.use(indexRoute.routes)
app.use(adminRoute.router)
app.use(shopRoute.router)
app.use(pageNotFound.notFound)
app.listen(3000)