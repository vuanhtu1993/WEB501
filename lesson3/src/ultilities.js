import Navigo from 'navigo'
// Configure - Cấu hình
const router = new Navigo('/');

function render(container, component) {
    document.querySelector(container).innerHTML = component()
}

export {
    router,
    render
}