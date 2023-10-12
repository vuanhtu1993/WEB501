import { useEffect } from "../../lib"

const CreateBook = function() {

    const postBook = function(data) {
        fetch('http://localhost:3000/books', {
            method: "POST",
            body: JSON.stringify(data),
            headers: {
                "Content-Type": "application/json"
            }
        }).then(() => {
            alert("Thêm mới thành công")
            window.location.href = "/admin"
        })
    }

    useEffect(function() {
        const createForm = document.querySelector("#create-form")
        createForm.onsubmit = function(event) {
            event.preventDefault()
            const formData = new FormData(createForm)
            const name = formData.get('name')
            const list_price = formData.get('list-price')
            const short_description = formData.get('short-description')
            const newBook = {
                name, list_price, short_description
            }
            postBook(newBook)
        }
    }, [])
    return /*html*/`
<div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="mx-auto max-w-lg text-center">
    <h1 class="text-2xl font-bold sm:text-3xl">Get started today!</h1>

    <p class="mt-4 text-gray-500">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla
        eaque error neque ipsa culpa autem, at itaque nostrum!
    </p>
    </div>

    <form id="create-form" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
    <div>
        <label>Tên</label>

        <div class="relative">
        <input
            type="text"
            name="name"
            class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
            placeholder="Nhận tên sản phẩm"
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
        ></textarea>
        </div>
    </div>

    <div class="flex items-center justify-between">

        <button
        type="submit"
        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
        >
        Thêm mới
        </button>
    </div>
    </form>
</div>
    `
}

export default CreateBook