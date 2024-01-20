import HeaderComponent from '../components/header'
import FooterComponent from '../components/footer'

import data from '../../db.json' assert {type: 'json'}

const HomePage = function () {
  return `
      ${HeaderComponent()}
      ${data.books.map(function (book) {
    return `
        <div>
          <img src="${book.images[0].base_url}"/>
        </div>`
  })}
      ${FooterComponent()}
    `
}

export default HomePage;