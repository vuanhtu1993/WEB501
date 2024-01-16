import Navigo from 'navigo'; // When using ES modules.

const render = (container, component) => {
    document.querySelector(container).innerHTML = component()
}

const router = new Navigo('/', { linksSelector: "a" });

export {
    render,
    router
}