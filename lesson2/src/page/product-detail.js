import Footer from "../components/footer"
import Header from "../components/header"
import {books} from '../../db.json' assert {type: 'json'}
import {useEffect} from '../lib'

const ProductDetail = (id) => {
    const book = books.find(function(book) {
        return id == book.id
    })

    useEffect(function() {
        const listThumbnail = document.querySelectorAll(".thumbnail")
        // console.log(listThumbnail);
        listThumbnail.forEach(function(btn) {
            // console.log(btn.dataset.src);
            btn.addEventListener('click', function() {
                document.querySelector(".image-detail").src = btn.dataset.src
            })
        })

    }, [])

    return /*html*/`
    ${Header()}
    <h1>Chi tiet san pham ${id}</h1>
    <img class="image-detail w-[300px]" src="${book.images[0]}"/>
    <div class="flex gap-2">
        ${book.images.map(function(image, index) {
            return /*html*/`<button class="thumbnail" data-src="${image}">
                <img class="w-[100px]" src="${image}"/>
            </button>`
        }).join('')}
    </div>
    ${Footer()}
    `
}

export default ProductDetail