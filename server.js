const express = require('express')
const expressServer = express()
const app = require('http').createServer(expressServer)


expressServer.set('view engine', 'ejs')
expressServer.use(express.static('public'))

expressServer.get('/', (req, res) => res.render('index'))


app.listen(80)