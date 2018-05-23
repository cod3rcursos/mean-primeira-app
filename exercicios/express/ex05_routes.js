const express = require('express')
const router = express.Router()

router.use((req, res, next) => {
  const init = Date.now()
  next()
  console.log(`Tempo = ${Date.now() - init} ms.`)
})

router.get('/produtos/:id', (req, res) => {
  res.json({id: req.params.id, name: 'Caneta'})
})

router.get('/clientes/:id/:name', (req, res) => {
  res.json({id: req.params.id, name: req.params.name})
})

module.exports = router
