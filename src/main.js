import { render, router } from "./lib";
import Dashboard from "./pages/dashboard";
import Detail from "./pages/detail";
import './style.css'


// Router
router.on('/', function () {
  render("#app", Dashboard)
})

router.on('/detail/:id', function ({ data }) {
  render("#app", () => Detail(data.id))
})

router.resolve();

