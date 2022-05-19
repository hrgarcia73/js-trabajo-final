import view from '../views/home.html';
import {getFermentadores, selectFermentador} from "../controllers/home.controller";

export default async () => {
    const fermentadores = await getFermentadores();
    //console.log(fermentadores);

    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    // console.log(divElement);
    const cbx = divElement.querySelector('#select-ferm');
    cbx.innerHTML="<option></option>";
    fermentadores.forEach(fermentador => {
        cbx.innerHTML+= `<option>${fermentador.nombre}</option>`;
    })
    divElement.querySelector('#form-select-ferm').addEventListener("submit", selectFermentador);
    return divElement;
}