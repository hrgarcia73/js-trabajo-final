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

export const selectFermentador = (e) => {
    e.preventDefault();
    alert ('fermentador');
}