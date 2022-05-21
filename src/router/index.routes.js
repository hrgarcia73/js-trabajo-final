import {pages} from '../views/index.js'
import resolveRoute from '../utils/resolveRoute'

let content = document.getElementById("root");

export const router = async (route) => {
    content.innerHTML = "";
    let validRoute = await resolveRoute(route)
 
    switch (validRoute){
        case '#/':{
            return content.appendChild(await pages.home());
        }
        case '/:fm':
            return content.appendChild(await pages.records(route));
        
        case '#nuevoregistro':
            return content.appendChild(await pages.newRecord());
        
        case '#editarregistro':
            return content.appendChild(await pages.editRecord());

        default:{
            return content.appendChild(pages.notFound());
        }
            
    }
}
