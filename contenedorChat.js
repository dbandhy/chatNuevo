import { ContenedorMysql } from "./ContenedorMysql.js";
import { clienteSql } from "./clienteSql.js";

 export const contenedorDeChat = new ContenedorMysql(clienteSql, 'chat')