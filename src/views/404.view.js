
export default () => {
    const divElement = document.createElement('div');
    //divElement.classList = 'text-white';
    divElement.innerHTML = `<h1>Error 404! Page not found</h1>`; 
    return divElement;
}