import Contact from "./pages/contact";
import HomePage from "./pages/homepage"
import Navigo from 'navigo'; // When using ES modules.
import NotFound from "./pages/notFound";

const router = new Navigo('/');
// // BOM
// console.log(window.location);

router.on('/', function () {
  document.querySelector("#app").innerHTML = HomePage()
});

router.on('/contact', function () {
  document.querySelector("#app").innerHTML = Contact()
});

router.notFound(function () {
  document.querySelector("#app").innerHTML = NotFound()
})


router.resolve();
// 