//desestructuro el objeto y tomo el campo que quiero verificar
function verificarCampos({lote}){ 
    if (lote == "" || lote.trim() == ""){
        Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'Debe indicar un lote válido!'
          })
        
        return false;
    }

    return true
}


export {verificarCampos};