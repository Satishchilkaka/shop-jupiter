const express = require('express')
const app = express()
const path = require('path')
const rootDir = require('./helper/path')
const indexRoute = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoute.routes)
app.use('', (req, res, next) => {
    res.send(path.join(rootDir, 'views', '404.html'))
})
app.listen(3000)