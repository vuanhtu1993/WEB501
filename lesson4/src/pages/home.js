import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

import data from '../../db.json' assert {type: 'json'}
import Book from '../components/book'

const HomePage = function () {
  return `
      ${HeaderComponent()}
      <div class="grid grid-cols-3 gap-4">
      ${data.books.map(function (book) {
    return Book(book)
  }).join("")}
      </div>
      
      ${FooterComponent()}
    `
}

export default HomePage;