import Footer from "../components/footer"
import Header from "../components/header"
import ProductItem from "../components/product-item"
// Destructoring
import { books } from '../../db.json' assert {type: 'json'}

const HomePage = () => {
  return /*html*/`
      ${Header()}
      <h1>Trang chủ</h1>
      <div class="container mx-auto grid grid-cols-4 gap-2">
        ${books.map(function (book) {
          return ProductItem(book)
        }).join('')}
      </div>
      ${Footer()}
    `
}

export default HomePage