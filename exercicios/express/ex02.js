const express = require('express')
const server = express()

server.get('/', function(req, res, next){
  console.log('Incio...')
  next()
  console.log('Fim...')
})

server.get('/', function(req, res, next){
  console.log('Resposta...')
  res.send('<h1>Olá Express!</h1>')
})


server.listen(3000, () => console.log('Executando...'))
