// Library - Thư viện
import { render, router } from "./ultilities";
// Components
import Contact from "./pages/contact";
import HomePage from "./pages/homepage"
import NotFound from "./pages/notFound";

router.on('/', function () {
  render("#app", HomePage)
});

router.on('/contact', function () {
  render("#app", Contact)
});

router.notFound(function () {
  render("#app", NotFound)
})
router.resolve();
// 