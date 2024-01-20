import Contact from "./pages/contact";
import HomePage from "./pages/home"
import "../style.css"

import { render, router } from "./ultilities";

router.on('/', function () {
    render("#app", HomePage)
});

router.on('/contact', function () {
    render("#app", Contact)
});

router.resolve();

