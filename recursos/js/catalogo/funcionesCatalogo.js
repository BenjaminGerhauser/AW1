//Rendeerizar todos los productos
export function llenarCatalogo(contenedorCatalogo,tienda) {
    let productosCatalogo = ''
    tienda.forEach(producto => {
        productosCatalogo += `
            <article class="producto" name="${producto.nombre}" data-id = "${producto.id}">
                <div class="imagenproducto1">
                    <img src=${producto.imagen} alt=" "name="${producto.nombre}" class="imagen-producto">
                </div>
                <div class="infoproducto">
                    <span>${producto.nombre}</span>
                    <span>${producto.precio}</span>
                </div>
            </article>
        `
    });
    contenedorCatalogo.innerHTML = productosCatalogo
}

//Abrir ventana de producto
export function abrirVistaProdcucto(tienda,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar) {
    
    productos.forEach(producto =>{
        producto.addEventListener('click',(evento)=>{
            contenedorVistaProducto.style.visibility = 'visible'
            contenedorVistaProducto.style.opacity = '1'
            let id = producto.dataset.id
            const productoSeleccion = tienda.filter((producto) =>{
                return producto.id === parseInt(id)
            })
            tituloProducto.innerText = productoSeleccion[0].nombre
            imgVerProducto.src = productoSeleccion[0].imagen
            botonAgregar.dataset.id = productoSeleccion[0].id
        })
    })
}

//Cerrar ventana de producto
export function cerrarVistaProdcucto(botonCerrarVista,contenedorVistaProducto){
    botonCerrarVista.addEventListener('click',(evento)=>{
        contenedorVistaProducto.style.visibility = 'hidden'
        contenedorVistaProducto.style.opacity = '0'
    })
}

//Abrir filtro

export function abrirFiltro(){
    const contenedorFiltro = document.getElementById('filtro')
    const btnAbrirFiltro = document.getElementById('btn-abrir-filtro')
    btnAbrirFiltro.addEventListener('click',(evento)=>{
        if(contenedorFiltro.style.visibility == 'visible'){
            contenedorFiltro.style.visibility = 'hidden'
            contenedorFiltro.style.opacity = '0'
        }
        else{
            contenedorFiltro.style.visibility = 'visible'
            contenedorFiltro.style.opacity = '1'
        }
    })
}


//Filtro precio
export function precio(botonPrecio,tienda,contenedorCatalogo){
    botonPrecio.addEventListener('input',(evento)=>{
        const productosFiltrados = tienda.filter(producto=>{
            return producto.precio < botonPrecio.value
        })
        llenarCatalogo(contenedorCatalogo,productosFiltrados)  

        const contenedorVistaProducto = document.getElementById('verProducto')
        const productos = document.querySelectorAll('.producto')
        const imgVerProducto = document.getElementById('imagen-ver-producto')
        const tituloProducto = document.getElementById('nombre-ver-producto')
        const botonAgregar = document.getElementById("btn-agregar")
        abrirVistaProdcucto(tienda,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar)
    })
}

//Filtro lamparas de pie
export function pie(botonPie,tienda,contenedorCatalogo){
    botonPie.addEventListener('change',(evento)=>{
        const productosPie = tienda.filter((producto)=>{
            return producto.desc === 'lamparaPie'
        })
        llenarCatalogo(contenedorCatalogo,productosPie)

        const contenedorVistaProducto = document.getElementById('verProducto')
        const productos = document.querySelectorAll('.producto')
        const imgVerProducto = document.getElementById('imagen-ver-producto')
        const tituloProducto = document.getElementById('nombre-ver-producto')
        const botonAgregar = document.getElementById("btn-agregar")
        abrirVistaProdcucto(tienda,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar)
    })
}

//Filtro lamparas de techo
export function techo(botonTecho,tienda,contenedorCatalogo){
    botonTecho.addEventListener('change',(evento)=>{
        const productosTecho = tienda.filter((producto)=>{
            return producto.desc === 'lamparaTecho'
        })
        llenarCatalogo(contenedorCatalogo,productosTecho)

        const contenedorVistaProducto = document.getElementById('verProducto')
        const productos = document.querySelectorAll('.producto')
        const imgVerProducto = document.getElementById('imagen-ver-producto')
        const tituloProducto = document.getElementById('nombre-ver-producto')
        const botonAgregar = document.getElementById("btn-agregar")
        abrirVistaProdcucto(tienda,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar)
    })
}

//Filtro Ver todo
export function verTodo(botonVerTodo,tienda,contenedorCatalogo){
    botonVerTodo.addEventListener('change',(evento)=>{
        llenarCatalogo(contenedorCatalogo,tienda)

        const contenedorVistaProducto = document.getElementById('verProducto')
        const productos = document.querySelectorAll('.producto')
        const imgVerProducto = document.getElementById('imagen-ver-producto')
        const tituloProducto = document.getElementById('nombre-ver-producto')
        const botonAgregar = document.getElementById("btn-agregar")
        abrirVistaProdcucto(tienda,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar)
    })
}

//Limpiar filtros
export function limpiar(botonLimpiar,tienda,botonFiltroPie,botonFiltroTecho,botonFiltroVerTodo,botonFiltroPrecio,contenedorCatalogo){
    botonLimpiar.addEventListener('click',(evento)=>{
        llenarCatalogo(contenedorCatalogo,tienda)
        botonFiltroPie.checked = false
        botonFiltroTecho.checked = false
        botonFiltroVerTodo.checked = false
        botonFiltroPrecio.value = ""

        const contenedorVistaProducto = document.getElementById('verProducto')
        const productos = document.querySelectorAll('.producto')
        const imgVerProducto = document.getElementById('imagen-ver-producto')
        const tituloProducto = document.getElementById('nombre-ver-producto')
        const botonAgregar = document.getElementById("btn-agregar")
        abrirVistaProdcucto(tienda,contenedorVistaProducto,productos,imgVerProducto,tituloProducto,botonAgregar)
    })
}

//Agregar carro
export function agregarProductCarro(id,cantidad){

    let arregloProductosCarro = JSON.parse(localStorage.getItem("productosCarro")) || []
    
    if(arregloProductosCarro.length === 0){
        arregloProductosCarro.push({id,cantidad})
    }else{
        let productoEncontrado = false
        arregloProductosCarro.forEach((producto)=>{
            if(producto.id === id){
                producto.cantidad += cantidad
                productoEncontrado = true
            }
        })
        if(!productoEncontrado){
            arregloProductosCarro.push({id,cantidad})
        }
    }
    localStorage.setItem("productosCarro", JSON.stringify(arregloProductosCarro))
}

