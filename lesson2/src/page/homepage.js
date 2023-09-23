import Footer from "../components/footer"
import Header from "../components/header"
import ProductItem from "../components/product-item"

const HomePage = () => {
  return `
      ${Header()}
      <h1>Trang chủ</h1>
      <div class="container mx-auto grid grid-cols-4 gap-2">
        ${ProductItem()}
        ${ProductItem()}
        ${ProductItem()}
        ${ProductItem()}
      </div>
      ${Footer()}
    `
}

export default HomePage