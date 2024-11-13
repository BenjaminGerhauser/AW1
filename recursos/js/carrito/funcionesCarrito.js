export function renderizarCarro(tienda) {
    const contenedorCarrito = document.getElementById("contenedorCarrito")
    const totalCarro = document.getElementById("total-compra")
    const arregloProductosCarro = JSON.parse(localStorage.getItem('productosCarro'))

    if( tienda !== undefined && arregloProductosCarro !== null){
        let html = '<h2 id="titulo-carrito">No hay productos</h2>'
        let productosMostrar = []
            arregloProductosCarro.forEach((productoCarro)=>{

                tienda.filter(producto =>{
                    if(productoCarro.id === producto.id){
                        let productoMostrar = producto 
                        let cantidad = productoCarro.cantidad
                        productosMostrar.push({productoMostrar,cantidad})
                    }
                })
            })
        let total = 0
        productosMostrar.forEach(producto=>{
            html += 
            `
            <article class="producto">
                    <img src=${producto.productoMostrar.imagen}" alt="">
                    <div class="detalle">
                        <span>${producto.productoMostrar.nombre}</span>
                        <span>$${producto.productoMostrar.precio}</span>
                        <input type="number" name="" class="cantidad-producto" readonly value="${producto.cantidad}">
                        <img src="recursos/imagenes/carrito/bxs-trash-alt.svg" alt="" class="btn-eliminar-producto" data-id="${producto.productoMostrar.id}">
                    </div>
                </article>
            `
            total += producto.productoMostrar.precio * producto.cantidad
        })
        contenedorCarrito.innerHTML = html
        totalCarro.innerHTML = `$${total}`
    } 
    else{
        contenedorCarrito.innerHTML = '<h2 id="titulo-carrito">No hay productos</h2>'
    }
    
    eliminarProductoCarro(tienda)
    vaciarCarrito(tienda)
}

export function eliminarProductoCarro(tienda){
    const btnEliminarProducto = document.querySelectorAll(".btn-eliminar-producto")
    let id
    btnEliminarProducto.forEach((boton) =>{
        boton.addEventListener('click',(evento)=>{
            id = parseInt(boton.dataset.id)
            const arregloProductosCarro = JSON.parse(localStorage.getItem('productosCarro'))
            
            const productosEliminar = arregloProductosCarro.filter(producto =>{
                return producto.id !== id
            })
            localStorage.setItem("productosCarro", JSON.stringify(productosEliminar))            
            renderizarCarro(tienda)
        })
    })
}

export function vaciarCarrito(tienda){
    const btnVaciarCarrito = document.getElementById("vaciar-carrito")
    btnVaciarCarrito.addEventListener('click',(evento)=>{
        localStorage.removeItem('productosCarro');
        renderizarCarro(tienda)
    })
}