import Contact from "./pages/contact";
import HomePage from "./pages/home"
import Navigo from 'navigo'; // When using ES modules.

const render = (container, component) => {
    document.querySelector(container).innerHTML = component()
}

const router = new Navigo('/', { linksSelector: "a" });

router.on('/', function () {
    render("#app", HomePage)
});

router.on('/contact', function () {
    render("#app", Contact)
});

router.resolve();

