export const getFermentadores = async () => {
    try {
        const response = await fetch("https://novaware.com.ar/fermentadores.json");
        const data = await response.json();
        //console.log(data);
        return data;
        
    } catch (error) {
        console.log('Error: ', error);
    }
}
// import { fermentador } from "../models/fermentador.model.js";
// import {fermentadores} from './db.js'
// export const getFermentadores = () => {
//     try {
        
//         return fermentadores;
        
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// }

export const getRegistrosFermentador = (fermentador) => {
    try {

        return fermentadores;
        
    } catch (error) {
        console.log('Error: ', error);
    }
}