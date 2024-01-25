import data from '../../db.json' assert { type: 'json' }

const BookDetail = function (id) {
    const book = data.books.find((item) => item.id == id)
    return `
        <div class="flex">
            <img class="w-1/2" src="${book.images[0].base_url}"/>
            <div>
                Tác giả: ${book.authors?.[0].name || "Chưa cập nhật"}
            </div>
        </div>
    `
}

export default BookDetail