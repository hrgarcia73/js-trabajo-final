import { fermentador } from '../models/fermentador.model';
import { registroFermentador } from '../models/registro-ferm.model';
import { verificarCampos } from '../utils/validaciones';

export let fmt = new fermentador;
export let registrosFermentador;
export let registroEditado;

/*
    LISTAR REGISTROS DE UN FERMENTADOR
*/
export const getFmRecords = async (fmName) => {
    fmt.nombre = fmName;
    registrosFermentador = JSON.parse(localStorage.getItem(fmt.nombre)) || [];

    return registrosFermentador;
}

/*
    AGREGAR UN NUEVO REGISTRO A UN FERMENTADOR
*/
export const newRecord = async (e) => {
    e.preventDefault();
    /*
        como idea del after del viernes Juan nos propuso usar el objeto formulario y lo implementé para ver como 
        se usaba.
    */
        const formulario = new FormData(e.target);
        const lote = formulario.get("inputLote");
        const fecha =  formulario.get("inputFecha");
        const hora = formulario.get("inputHora");
        const ph = formulario.get("inputPh");
        const densidad = formulario.get("inputDensidad");
        const gradoPlato = formulario.get("inputPlato");
        const conductividad = formulario.get("inputConductividad");
        const temperatura = formulario.get("inputTemp");
        const oxigeno = formulario.get("inputO2");
        const co2 = formulario.get("inputCo2");
        const celulasTotales=formulario.get("inputCelTot");
        const viabilidad = formulario.get("inputViabilidad");
        const volumen = formulario.get("inputVolumen");
        const presion = formulario.get("inputPresion");
        const observaciones = formulario.get("inputObs");
    
        const registro = new registroFermentador(lote, fecha, hora, ph, densidad, gradoPlato, conductividad,
            temperatura, oxigeno, co2, celulasTotales, viabilidad,
            volumen, presion, observaciones);
        
        if (verificarCampos(registro)){
            registrosFermentador.push(registro);
            localStorage.setItem(fmt.nombre, JSON.stringify(registrosFermentador));
              Swal.fire(
                '¡Registro agregado!',
                '',
                'success'
              )
        }

    const ruta = '#/'+ fmt.nombre +'/'
    window.location.hash=ruta;
}

/*
    AGREGAR UN NUEVO REGISTRO A UN FERMENTADOR
*/
export const deleteRecord = async (registro) => {
    Swal.fire({
        title: '¿Esta seguro?',
        text: "¡Esta acción no puede revertirse!",
        icon: 'warning',
        showCancelButton: true,
        confirmButtonColor: '#3085d6',
        cancelButtonColor: '#d33',
        confirmButtonText: '¡Sí, borrar registro!'
      }).then((result) => {
        if (result.isConfirmed) {
            registrosFermentador = registrosFermentador.filter(item => ((item.lote !=registro.lote) || (item.fecha !=registro.fecha) || (item.hora !=registro.hora)))
            localStorage.setItem(fmt.nombre, JSON.stringify(registrosFermentador));
            Swal.fire(
            '¡Registro borrado!',
            '',
            'success'
          )
          const ruta = '#/'+ fmt.nombre +'/';
          window.location.hash='#/';
          window.location.hash=ruta;
        }
      })


}

export const editRecord = (registro) =>{
    registroEditado = registro;
    registrosFermentador = registrosFermentador.filter(item => ((item.lote !=registro.lote) || (item.fecha !=registro.fecha) || (item.hora !=registro.hora)))
    localStorage.setItem(fmt.nombre, JSON.stringify(registrosFermentador));
    window.location.hash='#editarregistro';
}

export const saveEditRecord = (e) =>{
    e.preventDefault();
    const formulario = new FormData(e.target);
    const lote = formulario.get("inputLote");
    const fecha =  formulario.get("inputFecha");
    const hora = formulario.get("inputHora");
    const ph = formulario.get("inputPh");
    const densidad = formulario.get("inputDensidad");
    const gradoPlato = formulario.get("inputPlato");
    const conductividad = formulario.get("inputConductividad");
    const temperatura = formulario.get("inputTemp");
    const oxigeno = formulario.get("inputO2");
    const co2 = formulario.get("inputCo2");
    const celulasTotales=formulario.get("inputCelTot");
    const viabilidad = formulario.get("inputViabilidad");
    const volumen = formulario.get("inputVolumen");
    const presion = formulario.get("inputPresion");
    const observaciones = formulario.get("inputObs");

    const registro = new registroFermentador(lote, fecha, hora, ph, densidad, gradoPlato, conductividad,
        temperatura, oxigeno, co2, celulasTotales, viabilidad,
        volumen, presion, observaciones);
    
    if (verificarCampos(registro)){
        registrosFermentador.push(registro);
        localStorage.setItem(fmt.nombre, JSON.stringify(registrosFermentador));
          Swal.fire(
            '¡Registro modificado!',
            '',
            'success'
          )
    }

const ruta = '#/'+ fmt.nombre +'/'
window.location.hash=ruta;
}

export const cancelEditRecord = () =>{
    registrosFermentador.push(registroEditado);
    localStorage.setItem(fmt.nombre, JSON.stringify(registrosFermentador));
    const ruta = '#/'+ fmt.nombre +'/';
    window.location.hash='#/';
    window.location.hash=ruta;
}