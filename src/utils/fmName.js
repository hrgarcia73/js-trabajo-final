const fmName = (route) => {
    let fmName = route.replace(/#/g, '');
    fmName = fmName.replace(/\//g, '');

    return fmName;
}

export default fmName;