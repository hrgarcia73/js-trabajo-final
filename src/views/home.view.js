import {getFermentadores} from "../controllers/home.controller";

export default async () => {
    const fermentadores = await getFermentadores();
    const view = document.createElement('div');
    view.classList.add('tank-container');
    fermentadores.forEach(fermentador =>{
        const div = document.createElement('div');
        div.classList.add('tank-card');
        div.innerHTML += `
            <div class="tank-card-image">
                <a href="#/${fermentador.nombre}/">
                    <img src="d5fe211223779a7c08af.jpg" alt="imagen fermentador">
                    <span class="tank-card-title">${fermentador.nombre}</span>
                </a>
                <P>${fermentador.producto} </p>
            </div>
        `
        view.appendChild(div);
    })
  return view;
}


// const view = `
// <div class="card">
// ${fermentadores.forEach(fermentador => `
//     <div class="card-content">
//         <a href="#/${fermentador.nombre}/">
//             <img src="${fermentador.image}" alt="${fermentador.nombre}">
//             <p>${fermentador.nombre}</p>
//         </a>
//     </div>
// `).join('')}
// </div>
// `;