import Navigo from "navigo"
import HomePage from "./page/homepage";
import ProductDetail from "./page/product";
import { render } from "./lib";
import './style.css'

const router = new Navigo('/')

// Router
router.on('/', function () {
  render("#app", HomePage)
})

router.on('/product', function () {
  render("#app", ProductDetail)
})


router.resolve();

