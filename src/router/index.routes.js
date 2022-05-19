import {pages} from '../views/index.js'

let content = document.getElementById("root");

export const router = async (route) => {
    content.innerHTML = "";
    switch (route){
        case '#/':{
            return content.appendChild(await pages.home());
        }
        case '#/products':
            return console.log('products') //content.appendChild(pages.products());
        case '#/post':
            return console.log('posts') //content.appendChild(await pages.post());
        default:
            return content.appendChild(pages.notFound());
    }
}
