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

// Render dữ liệu
document.querySelector('#app').innerHTML = HomePage()