import { tienda } from "../tienda.js"
import { renderizarCarro } from "./funcionesCarrito.js"
import { eliminarProductoCarro } from "./funcionesCarrito.js"
import { vaciarCarrito } from "./funcionesCarrito.js"

const detalleCarrito = document.getElementById("detalleCarrito")


renderizarCarro(tienda.productos)
eliminarProductoCarro(tienda.productos)
vaciarCarrito(tienda.productos)


