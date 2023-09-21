import Navigo from "navigo"

const router = new Navigo('/')



// component header
const Header = () => {
  // string interpolation
  return `
    <header>Đầu trang</header>
  `
}

const Footer = () => {
  return `
    <footer>Đuôi trang</footer>
  `
}

const Content = () => {
  return `
    <article>List product</article>
  `
}

const HomePage = () => {
  return `
    ${Header()}
    ${Content()}
    ${Footer()}
  `
}

const ProductDetail = () => {
  return `
  ${Header()}
  <h1>Chi tiet san pham</h1>
  ${Footer()}
  `
}

// Router
router.on('/', function () {
  console.log("Trang chu");
  // Render dữ liệu
  document.querySelector('#app').innerHTML = HomePage()
})

router.on('/product', function () {
  console.log("Chi tiet san pham");
  // Render dữ liệu
  document.querySelector('#app').innerHTML = ProductDetail()
})

// Tao them cac trang
// 1. Thong tin website
// 2. Tin tuc

router.resolve();

