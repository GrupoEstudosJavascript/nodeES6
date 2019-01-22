import express, { Router } from 'express'
//const express = require('express')
import cors from 'cors'
import compression from 'compression'
import logger from 'morgan'
import bodyParser from 'body-parser'
import helmet from 'helmet'

const app = express()
const router = Router()
app.set('port', 5200)

// Definindo midlewares
app.use(logger('dev'))
app.use(cors())
app.use(helmet())
app.use(compression())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: false }))

router.get('/', (req, res) => {
  res.send({
    msg: 'Funcionando!!!!',
  })
}),
  app.use(router)

app.listen(app.get('port'), () => {
  console.log('Servidor iniciado na porta', app.get('port'))
})
