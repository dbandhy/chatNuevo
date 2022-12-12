import {Router} from 'express';
import { contenedorDeChat } from './contenedorChat.js';
//import {randomUUID as generarId} from 'crypto'

export const routerChat = Router() ;

routerChat.post('/', async (req, res) => {
    const nuevoMensaje = req.body
    // nuevoProducto.id = generarId()
    await contenedorDeChat.save(nuevoMensaje)
    res.json(nuevoMensaje);
});

routerChat.get('/', async (req, res) => {
    res.json(await contenedorDeChat.getAll());
});