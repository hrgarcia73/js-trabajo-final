

export const getFermentadores = async () => {
    try {
        const response = await fetch("/fermentadores.json");
        const data = await response.json();
        //console.log(data);
        return data;
        
    } catch (error) {
        console.log('Error: ', error);
    }
}