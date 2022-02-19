document.addEventListener('DOMContentLoaded',()=>{

   

})


const comprar = document.querySelectorAll('.btn-success')




/* Funciones */


 const elegirObjeto = ()=>{
     
    

    comprar.addEventListener('click', (e)=>{
        e.preventDefault()

        console.log('objeto');
    })
 }