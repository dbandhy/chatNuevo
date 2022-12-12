import {app} from './server.js'
import { port } from './config.js'


app.listen(port, () => {
    console.log('conectado al puerto 8080')
})