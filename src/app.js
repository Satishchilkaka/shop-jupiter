const express = require('express')
const app = express()
const path = require('path')
const indexRoute = require('./routes/index')

app.use(express.static(path.join(__dirname, 'public')))

app.use(indexRoute.routes)
app.listen(3000)