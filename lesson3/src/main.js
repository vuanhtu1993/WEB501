// Library - Thư viện
import { render, router } from "./ultilities";
// Components
import Contact from "./pages/contact";
import HomePage from "./pages/homepage"
import NotFound from "./pages/notFound";
import BookDetail from "./pages/bookDetail";
import "../style.css"
import Dashboard from "./pages/dashboard";
import UpdateBook from "./pages/updateBook";

router.on('/', function () {
  render("#app", HomePage)
});

router.on('/contact', function () {
  render("#app", Contact)
});

router.on('/book/:id', function ({ data }) {
  render("#app", () => BookDetail(data.id))
})

router.on("/admin", function () {
  render("#app", Dashboard)
})

router.on("/admin/book/:id", function ({ data }) {
  render("#app", () => UpdateBook(data.id))
})

router.notFound(function () {
  render("#app", NotFound)
})
router.resolve();
// 