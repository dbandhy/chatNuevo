
import express from 'express'
import {routerProductos } from './routerProductos.js'
import { routerChat } from './routerChat.js'

export const app = express()
app.use(express.json())
 
//ROUTEs
app.use('/api/productos', routerProductos)
app.use('/api/chat', routerChat)
