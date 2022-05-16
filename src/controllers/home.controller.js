import view from '../views/home.html'
import {getFermentadores} from "../data/getData.js"

const fermentadores = getFermentadores();

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    
    const cbx = divElement.querySelector('#select-ferm');
    cbx.innerHTML="<option></option>";
    fermentadores.forEach(fermentador => {
        cbx.innerHTML+= `<option>${fermentador.nombre}</option>`;
    })

    return divElement;
}