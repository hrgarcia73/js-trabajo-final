// import {fmt, registrosFermentador} from './records.controller';
// import { verificarCampos } from '../utils/validaciones';
// import { registroFermentador } from '../models/registro-ferm.model';
// //import {router} from '../router/index.routes'

// export const newRecord = async (e) => {
//     e.preventDefault();
//     /*
//         como idea del after del viernes Juan nos propuso usar el objeto formulario y lo implementé para ver como 
//         se usaba.
//     */
//         const formulario = new FormData(e.target);
//         const lote = formulario.get("inputLote");
//         const fecha =  formulario.get("inputFecha");
//         const hora = formulario.get("inputHora");
//         const ph = formulario.get("inputPh");
//         const densidad = formulario.get("inputDensidad");
//         const gradoPlato = formulario.get("inputPlato");
//         const conductividad = formulario.get("inputConductividad");
//         const temperatura = formulario.get("inputTemp");
//         const oxigeno = formulario.get("inputO2");
//         const co2 = formulario.get("inputCo2");
//         const celulasTotales=formulario.get("inputCelTot");
//         const viabilidad = formulario.get("inputViabilidad");
//         const volumen = formulario.get("inputVolumen");
//         const presion = formulario.get("inputPresion");
//         const observaciones = formulario.get("inputObs");
    
//         const registro = new registroFermentador(lote, fecha, hora, ph, densidad, gradoPlato, conductividad,
//             temperatura, oxigeno, co2, celulasTotales, viabilidad,
//             volumen, presion, observaciones);
        
//         if (verificarCampos(registro)){
//             registrosFermentador.push(registro);
//             localStorage.setItem(fmt.nombre, JSON.stringify(registrosFermentador));
//               Swal.fire(
//                 '¡Registro agregado!',
//                 '',
//                 'success'
//               )
//         }

//     const ruta = '#/'+ fmt.nombre +'/'
//     //router('#/')
//     //router(ruta);
//     Swal.fire(
//         '¡Registro agregado!',
//         '',
//         'success'
//       )
//     window.location.hash=ruta;
// }

