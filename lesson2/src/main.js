import Navigo from "navigo"
import HomePage from "./page/homepage";
import ProductDetail from "./page/product-detail";
import { render, router } from "./lib";
import './style.css'
import Dashboard from "./page/admin/dashboard";
import CreateBook from "./page/admin/create";
import UpdateBook from "./page/admin/update";

// Router
router.on('/', function () {
  render("#app", HomePage)
})

router.on('/product/:id', function ({data}) {
  render("#app", () => ProductDetail(data.id))
  // render("#app", ProductDetail)
})

router.on('/admin', function () {
  render("#app", Dashboard)
})

router.on('/admin/create', function () {
  render("#app", CreateBook)
})

router.on('/admin/book/:id', function ({data}) {
  render("#app", () => UpdateBook(data.id))
})


router.resolve();

