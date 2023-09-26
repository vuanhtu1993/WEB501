import Navigo from "navigo"
import HomePage from "./page/homepage";
import ProductDetail from "./page/product-detail";
import { render } from "./lib";
import './style.css'

const router = new Navigo('/', {linksSelector: "a"})

// Router
router.on('/', function () {
  render("#app", HomePage)
})

router.on('/product/:id', function ({data}) {
  render("#app", () => ProductDetail(data.id))
  // render("#app", ProductDetail)
})


router.resolve();

