import Navigo from "navigo"
import HomePage from "./page/homepage";
import ProductDetail from "./page/product-detail";
import { render, router } from "./lib";
import './style.css'

// Router
router.on('/', function () {
  render("#app", HomePage)
})

router.on('/product/:id', function ({data}) {
  render("#app", () => ProductDetail(data.id))
  // render("#app", ProductDetail)
})


router.resolve();

