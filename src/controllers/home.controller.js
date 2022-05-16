import view from '../views/home.html'
import {getFermentadores} from "../data/getData.js"

const fermentadores = getFermentadores();

export default () => {
    const divElement = document.createElement('div');
    divElement.innerHTML = view;
    
    return divElement;
}