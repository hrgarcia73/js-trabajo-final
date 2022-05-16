import Home from './home.controller'
import notFound from './404.controller'

const pages = {
    home: Home,
    products: Products,
    post: Posts,
    notFound: notFound
}

export{pages};
