const express = require('express')
const server = express()

server.use(function(req, res, next) {
  console.log('Inicio...')
  next()
  console.log('Fim...')
})

server.use(function(req, res) {
  console.log('Resposta...')
  res.send('<h1>API!</h1>')
})

server.listen(3000, () => console.log('Executando...'))
