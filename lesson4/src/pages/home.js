import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

import { books } from '../../db.json' assert {type: 'json'}

const HomePage = function () {
  return `
      ${HeaderComponent()}
      ${books.map(function (book) {
    return `
        <div>
          <img src="${book.images[0].base_url}"/>
        </div>`
  })}
      ${FooterComponent()}
    `
}

export default HomePage;