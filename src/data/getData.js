// export const getFermentadores = async () => {
//     try {
//         const response = await fetch("https://github.com/hrgarcia73/js-trabajo-final/blob/master/src/data/fermentadores.json");
//         const data = await response.json();
//         //console.log(data);
//         return data;
        
//     } catch (error) {
//         console.log('Error: ', error);
//     }
// }
import {fermentadores} from './db.js'
export const getFermentadores = () => {
    try {

        return fermentadores;
        
    } catch (error) {
        console.log('Error: ', error);
    }
}