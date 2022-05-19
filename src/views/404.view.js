import notFound from '../views/404.html'

export default () => {
    const divElement = document.createElement('div');
    divElement.classList = 'text-white';
    divElement.innerHTML = notFound;

    return divElement;
}