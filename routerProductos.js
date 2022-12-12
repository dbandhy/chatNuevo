import {Router} from 'express';
import { contenedorDeProductos } from './contenedorProducts.js';
import {randomUUID as generarId} from 'crypto'

export const routerProductos = Router() ;

routerProductos.post('/', async (req, res) => {
    const nuevoProducto = req.body
    nuevoProducto.id = generarId()
    await contenedorDeProductos.save(nuevoProducto)
    res.json(nuevoProducto);
});

routerProductos.get('/', async (req, res) => {
    res.json(await contenedorDeProductos.getAll());
});