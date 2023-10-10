import Footer from "../components/footer"
import Header from "../components/header"
import ProductItem from "../components/product-item"
import {useState, useEffect} from '../lib'

const HomePage = () => {
  let [books, setBook] = useState([])
  useEffect(function() {
    fetch('http://localhost:3000/books') //Promise
    .then(function(res) {
      return res.json()
    }) 
    .then(function(data) {
      // books = data
      setBook(data)
    })
  }, [])
  
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