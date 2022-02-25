
let articulos = [];


/* funcion que muestra el carrito  */


const CrearCart = ()=>{

    const carrito = $('.contenedor-cart');
    
    $(carrito).slideToggle(1000);
}













const listaProductos = document.getElementById('productos')








const agregarProducto = (e)=>{
  

    if (e.target.classList.contains('agregar')) {
        

        const productoSelected =  e.target.parentElement.parentElement;
      
       LeerDatosObjeto(productoSelected)
       
    }


};


const LeerDatosObjeto = (producto)=>{
    console.log(producto);






      let imagen = producto.querySelector('img').src,
   
       info =  producto.querySelector('.text-body').textContent,
      precio = producto.querySelector('.precio-a').textContent
      id = producto.querySelector('.agregar').getAttribute('data-id')
      
      
   




     
     
    




articulos = [...articulos, new Producto(imagen,info,precio,id)]


 console.log(articulos); 

carritoHTML()

} 





const carritoHTML = ()=>{

    /* limpiar html */

    

    
    const carrito = $('.cart');
    $(carrito).html('');

    articulos.forEach(articulo =>{

        let objeto = document.createElement('div')
      

    
    $(objeto).attr('class', 'obj');
    
    $(objeto).html(` 
    <img src=${articulo.imagen} alt="img">


<p>${articulo.info}</p>
<p class="precio-cart"> ${articulo.precio}</p>
<div class="botones">
  
    <button class="btn-danger eliminar" onclick = 'EliminarArticulo(${articulo.id})'>Eliminar</button>
</div>
`); 

    $(carrito).append(objeto);



    })

 
    

}


 

const EliminarArticulo = (id) =>{

   let  articuloEliminar = articulos.findIndex(articulo => articulo.id == id)
    console.log(articuloEliminar);
    articulos.splice(articuloEliminar,1)
    carritoHTML()

}
 

listaProductos.addEventListener('click',agregarProducto)