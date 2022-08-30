const express = require('express')
const serveStatic = require('serve-static')
const path = require('path')
const { appendFile } = require('fs')

appendFile.use('/', serveStatic(path.join(__dirname, '/dist')))

const port = 8080
app.listen(port)
console.log('Server running on port: ' + port)
