import {deleteRecord, getFmRecords, editRecord} from '../controllers/records.controller';
import fmName from '../utils/fmName';

export default async (route) => {
    let records = await getFmRecords(fmName(route));
    const view = document.createElement('div');
    view.classList.add('container-fluid');
    view.innerHTML =   `<div class="row">
                            <div class="col-md-12">
                                <div class="card primary-cad">
                                    <div class="card-header">
                                        <h3 class="card-title"> Registros del fermentador <span id="fm-name">FM12</span></h3>
                                        <a href="#nuevoregistro">
                                            <button type="button" class="btn btn-info btn-xs" id="btn-cargar-registros">Nuevo registro</button>
                                        </a>
                                    </div>

                                    <table class="table-sm table-striped" id="tabla-registros-fermentador"></table>
                                </div>
                            </div>
                        </div>`
    const nombreFerm = view.querySelector('#fm-name');
    nombreFerm.innerHTML = fmName(route);

    let tablaRegistros = view.querySelector("#tabla-registros-fermentador");
    tablaRegistros.innerHTML = "";

    let thead = tablaRegistros.appendChild(document.createElement('thead'));
    let tbody = tablaRegistros.appendChild(document.createElement('tbody'));
    let tfoot = tablaRegistros.appendChild(document.createElement('tfoot'));

    thead.innerHTML = "";
    tbody.innerHTML = "";
    tfoot.innerHTML = "";
    
    thead.innerHTML = `<thead>
                            <tr>
                                <th scope="col">Lote</th>
                                <th scope="col">Fecha</th>
                                <th scope="col">Hora</th>
                                <th scope="col">ph</th>
                                <th scope="col">Densidad</th>
                                <th scope="col">ºP</th>
                                <th scope="col">Conductividad</th>
                                <th scope="col">Temperatura</th>
                                <th scope="col">Oxigeno</th>
                                <th scope="col">Co2</th>
                                <th scope="col">Celulas totales</th>
                                <th scope="col">Viabilidad</th>
                                <th scope="col">Volumen</th>
                                <th scope="col">Presión</th>
                                <th scope="col">Observaciones</th>
                                <th scope="col">Acciones</th>
                            </tr>
                        </thead>`

    /*
        Implemento un operador ternario. Si registros tiene elementos genera la tabla
        de registros para mostrar. Sino, muestra el footer de la tabla informando que no
        hay registros
    */
    records.length>=1 ? records.forEach(registro => {
        /*
            Cambio el método para pintar las filas para poder crear los botones 
            como objetos del <td> y este como objeto del <tr> como lo hace Juan
            en el after. Tengo pendiente probar el uso de templates y fragment.
            Entiendo que esto mejora el rendimiento a la hora de pintar mucha
            info en el documento
        */
            let tr = tbody.appendChild(document.createElement('tr'));
            tr.innerHTML +=`<td>${registro.lote}</td>
                        <td>${registro.fecha}</td>
                        <td>${registro.hora}</td>
                        <td>${registro.ph}</td>
                        <td>${registro.densidad}</td>
                        <td>${registro.gradoPlato}</td>
                        <td>${registro.conductividad}</td>
                        <td>${registro.temperatura}</td>
                        <td>${registro.oxigeno}</td>
                        <td>${registro.co2}</td>
                        <td>${registro.celulasTotales}</td>
                        <td>${registro.viabilidad}</td>
                        <td>${registro.volumen}</td>
                        <td>${registro.presion}</td>
                        <td>${registro.observaciones}</td>
                        `;

            let td = tr.appendChild(document.createElement('td'));
               
            const btnEditar = td.appendChild(document.createElement('button'));
            btnEditar.innerText = "Editar";
            btnEditar.classList.add("btn", "btn-info","btn-sm", "mr-1");
            btnEditar.addEventListener("click", () => {
                editRecord(registro);
            })

            const btnBorrar = td.appendChild(document.createElement('button'));
            btnBorrar.innerText = "Borrar";
            btnBorrar.classList.add("btn", "btn-danger","btn-sm");
            btnBorrar.addEventListener("click", () => {
                deleteRecord(registro);
            })

            tbody.appendChild(tr);

    }): tfoot.innerHTML = `<th scope="row" colspan="15">Sin registros para mostrar</th>`



    return view;
}