const resolveRoure = (route) => {
    
    let validRoute = route.includes('FM') ? "/:fm" : route;

    return validRoute
}

export default resolveRoure;