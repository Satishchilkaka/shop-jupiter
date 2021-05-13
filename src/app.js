const express = require('express')
const app = express()
const path = require('path')
const rootDir = require('./helper/path')
const indexRoute = require('./routes/index')
const adminRoute = require('./routes/admin')

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoute.routes)
app.use(adminRoute.router)
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'))
})
app.listen(3000)