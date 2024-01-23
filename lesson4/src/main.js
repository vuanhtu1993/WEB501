import Contact from "./pages/contact";
import HomePage from "./pages/home"
import "../style.css"

import { render, router } from "./ultilities";
import BookDetail from "./pages/bookDetail";

router.on('/', function () {
    render("#app", HomePage)
});

// Chi tiet san pham
router.on('/book/:id', function ({ data }) {
    console.log(data.id);
    render("#app", () => BookDetail(data.id))
})

router.on('/contact', function () {
    render("#app", Contact)
});

router.resolve();

