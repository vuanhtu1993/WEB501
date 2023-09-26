import Footer from "../components/footer"
import Header from "../components/header"
import {books} from '../../db.json' assert {type: 'json'}

const ProductDetail = (id) => {
    const book = books.find(function(book) {
        return id == book.id
    })
    return `
    ${Header()}
    <h1>Chi tiet san pham ${id}</h1>
    <img src="${book.images[0]}"/>
    ${Footer()}
    `
}

export default ProductDetail