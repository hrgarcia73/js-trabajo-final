import { cancelEditRecord, saveEditRecord, registroEditado } from "../controllers/records.controller";

export default async (registro) => {
    console.log(registro);
    const view = document.body;
    const modalContainer = document.createElement('div');
    modalContainer.classList.add("modal-container")
    modalContainer.innerHTML = `<div class="modal-form-container">
                                    <div class="card-header">
                                        <h3 class="card-title"> Ingreso de datos</h3>
                                    </div>
                                    <form id="formulario-registro">
                                        <div class="card-body">
                                            <div class="form-group">
                                                <div class="form-row">
                                
                                                    <div class="form-group col-md-2">
                                                    <label for="inputLote">Lote</label>
                                                    <input name="inputLote" value="${registroEditado.lote}" type="text" class="form-control" id="inputLote" placeholder="Lote" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                    <label for="inputFecha">Fecha</label>
                                                    <input name="inputFecha" value="${registroEditado.fecha}" type="date" class="form-control" id="inputFecha" required>
                                                    </div>
                                                
                                                    <div class="form-group col-md-1">
                                                        <label for="inputHora">Hora</label>
                                                        <input name="inputHora" value="${registroEditado.hora}" type="time" class="form-control" id="inputHora" required>
                                                    </div>
                                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputPh">Ph</label>
                                                        <input name="inputPh" value="${registroEditado.ph}" type="number" step="0.01" min="0" max="14" class="form-control" id="inputPh" placeholder="0.00" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputDensidad">Densidad</label>
                                                        <input name="inputDensidad" value="${registroEditado.densidad}" type="number" step="0.001" min="1" max="1.1" class="form-control" id="inputDensidad" placeholder="0.01" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputPlato">ºP</label>
                                                        <input name="inputPlato" value="${registroEditado.gradoPlato}" type="number" step="0.01" min="0" max="25" class="form-control" id="inputPlato" placeholder="ºP" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputConductividad">Conductividad </label>
                                                        <input name="inputConductividad" value="${registroEditado.conductividad}" type="number" step="0.01" min="0" max="50" class="form-control" id="inputConductividad" placeholder="mS" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputTemp">Temperatura</label>
                                                        <input name="inputTemp" value="${registroEditado.temperatura}" type="number" step="0.01" min="-5" max="20" class="form-control" id="inputTemp" placeholder="ºC" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputO2">O2</label>
                                                        <input name="inputO2" value="${registroEditado.oxigeno}" type="number" step="0.01" min="0" max="100" class="form-control" id="inputO2" placeholder="ppb" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputCo2">Co2</label>
                                                        <input name="inputCo2" value="${registroEditado.co2}" type="number" step="0.01" min="0" max="10" class="form-control" id="inputCo2" placeholder="g/l" required>
                                                    </div>
                                            
                                                    <div class="form-group col-md-2">
                                                        <label for="inputCelTot">Celulas totales</label>
                                                        <input name="inputCelTot" value="${registroEditado.celulasTotales}" type="number" step="0.01" min="0" max="5000000" class="form-control" id="inputCelTot" placeholder="0.00" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputViabilidad">Viabilidad</label>
                                                        <input name="inputViabilidad" value="${registroEditado.viabilidad}" type="number" step="0.01" min="0" max="100" class="form-control" id="inputViabilidad" placeholder="%" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputVolumen">Volumen</label>
                                                        <input name="inputVolumen" value="${registroEditado.volumen}" type="number" step="0.01" min="0" max="800" class="form-control" id="inputVolumen" placeholder="hl" required>
                                                    </div>
                                
                                                    <div class="form-group col-md-2">
                                                        <label for="inputPresion">Presión</label>
                                                        <input name="inputPresion" value="${registroEditado.presion}" type="number" step="0.01" min="0" max="1" class="form-control" id="inputPresion" placeholder="bar" required>
                                                    </div>
                                
                                                </div><!--/row-->
                                
                                                <div class="form-row">
                                                    <div class="form-group col-md-10">
                                                        <label for="inputObs">Observaciones</label>
                                                        <textarea name="inputObs" class="form-control" rows="3" id="inputObs">${registroEditado.observaciones}</textarea>
                                                    </div>
                                                </div>   
                                            </div>
                                                <button type="submit" class="btn btn-info btn-xs" id="btn-guardar">Guardar</button>
                                                <button type="button" class="btn btn-danger btn-xs" id="btn-cancelar">Cancelar</button>
                                            </div>
                                        </div>
                                    </form>
                                </div>`
        
    //view.appendChild(modalContainer);
    modalContainer.querySelector("#formulario-registro").addEventListener("submit", saveEditRecord);
    modalContainer.querySelector("#btn-cancelar").addEventListener("click", cancelEditRecord);
    return modalContainer;
}


