import * as Joi from 'joi'
import { useEffect, useState } from "../../lib"

const updateFormSchema = Joi.object({
    name: Joi.string().required().messages({
        "string.empty": "{#label} - Trường dữ liệu bắt buộc"
    }),
    list_price: Joi.number().required(),
    short_description: Joi.string()
})

const UpdateBook = function(id) {
    const [book, setBook] = useState({})
    const [error, setError] = useState(null)

    const putBook = function(data) {
        fetch('http://localhost:3000/books/' + id, {
            method: "PATCH",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            alert("Cập nhật thành công")
            window.location.href = "/admin"
        })
    }

    const getBookById = function(id) {
        fetch("http://localhost:3000/books/" + id)
        .then(res => res.json())
        .then(data => setBook(data))
    }

    useEffect(function() {
        getBookById(id)
    }, [])

    useEffect(function() {
        const updateForm = document.querySelector("#update-form")
        
        updateForm.onsubmit = function(event) {
            event.preventDefault()
            const formData = new FormData(updateForm)
            const name = formData.get('name')
            const list_price = formData.get('list-price')
            const short_description = formData.get('short-description')
            const updatedBook = {
                name, list_price, short_description
            }
            const {value, error} = updateFormSchema.validate(updatedBook)
            if (error) {
                setError(error)
            } else {
                putBook(value)
            }
            // console.log(updatedBook);
        }
    }, [book, error])
    return /*html*/`
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Cập nhật sách</h1>

    <p class="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
    </p>
    </div>
    
    <form id="update-form" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
        <label>Tên</label>

        <div class="relative">
        <input
            type="text"
            name="name"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nhận tên sản phẩm"
            value="${book.name}"
        />
        </div>
    </div>

    <div>
        <label>Giá</label>

        <div class="relative">
        <input
            type="number"
            name="list-price"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nhập giá sản phẩm"
            value="${book.list_price}"
        />
        </div>
    </div>

    <div>
        <label>Mô tả</label>

        <div class="relative">
        <textarea 
            name="short-description"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nhập mô tả sản phẩm"
        >${book.short_description}</textarea>
        </div>
    </div>

    <div class="flex items-center justify-between">
        <div class="text-red-600">${error || ""}</div>
        <button
        type="submit"
        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
        Cập nhật
        </button>
    </div>
    </form>
</div>
    `
}

export default UpdateBook