import Header from "../components/header"
import Footer from "../components/footer"
import Card from "../components/card"
import Advertisement from "../components/advertisement"

// Data
import data from '../../db.json' assert {type: 'json'}
// Pages
const HomePage = function () {
  return `
      ${Header()}
      <h1>Trang chủ</h1>
      <div class="grid grid-cols-3 gap-4">
      ${data.books.map(function (book) {
    return Card(book)
  }).join("")}
      </div>
      
      ${Footer()}
    `
}

export default HomePage