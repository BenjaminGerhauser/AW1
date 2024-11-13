import { tienda } from "../tienda.js"
import { llenarCatalogo } from "./funcionesCatalogo.js"
import { abrirVistaProdcucto } from "./funcionesCatalogo.js"
import { cerrarVistaProdcucto } from "./funcionesCatalogo.js"
import { precio } from "./funcionesCatalogo.js"
import { pie } from "./funcionesCatalogo.js"
import { techo } from "./funcionesCatalogo.js"
import { verTodo } from "./funcionesCatalogo.js"
import { limpiar } from "./funcionesCatalogo.js"
import{ agregarProductCarro } from "./funcionesCatalogo.js"
import { abrirFiltro } from "./funcionesCatalogo.js"


const contenedorCatalogo = document.getElementById('contenedorCatalogo')

llenarCatalogo(contenedorCatalogo,tienda.productos)

const contenedorVistaProducto = document.getElementById('verProducto')
const productos = document.querySelectorAll('.producto')
const imgVerProducto = document.getElementById('imagen-ver-producto')
const tituloProducto = document.getElementById('nombre-ver-producto')
const botonAgregar = document.getElementById("btn-agregar")
abrirVistaProdcucto(tienda.productos,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar)

const botonCerrarVista = document.getElementById('cerrar-vista')
cerrarVistaProdcucto(botonCerrarVista,contenedorVistaProducto)


abrirFiltro()

const botonFiltroPrecio = document.getElementById('precio-producto')
precio(botonFiltroPrecio,tienda.productos,contenedorCatalogo,contenedorVistaProducto,imgVerProducto,tituloProducto,botonAgregar)

const botonFiltroPie = document.getElementById('lampPie')
pie(botonFiltroPie,tienda.productos,contenedorCatalogo,contenedorVistaProducto,imgVerProducto,tituloProducto,botonAgregar)

const botonFiltroTecho = document.getElementById('lampTecho')
techo(botonFiltroTecho,tienda.productos,contenedorCatalogo,contenedorVistaProducto,imgVerProducto,tituloProducto,botonAgregar)

const botonFiltroVerTodo = document.getElementById('verTodo')
verTodo(botonFiltroVerTodo,tienda.productos,contenedorCatalogo,contenedorVistaProducto,imgVerProducto,tituloProducto,botonAgregar)

const botonFiltroLimpiar = document.getElementById('botonLimpiar')
limpiar(botonFiltroLimpiar,tienda.productos,botonFiltroPie,botonFiltroTecho,botonFiltroVerTodo,botonFiltroPrecio,contenedorCatalogo,contenedorVistaProducto,imgVerProducto,tituloProducto,botonAgregar)

const cantidadProducto = document.getElementById("cantidad-producto")
botonAgregar.addEventListener('click',(evento)=>{
    let cantidad = cantidadProducto.value
    agregarProductCarro(parseInt(botonAgregar.dataset.id),parseInt(cantidad))
})




