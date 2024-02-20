
import { useEffect, useState } from "../lib";

const Detail = (id) => {
    const [product, setProduct] = useState({})

    useEffect(function () {
        fetch("http://localhost:3000/products/" + id)
            .then(res => res.json())
            .then(data => setProduct(data))
    }, [])

    useEffect(function () {
        const form = document.querySelector("#update-form")
        form.onsubmit = function (e) {
            e.preventDefault()
            handleUpdate(form)
        }
    })

    const handleUpdate = function (form) {
        const dataForm = new FormData(form)
        const name = dataForm.get("name")
        const price = dataForm.get("price")
        const description = dataForm.get("description")
        const review = dataForm.get("review")
        const newData = {
            name,
            price,
            description,
            review
        }
        fetch("http://localhost:3000/products/" + id, {
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(newData),
            method: "PATCH"
        }).then(() => alert("Cập nhật thành công"))
    }
    console.log(product);
    return /*html*/`
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
            <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Chi tiết sản phẩm</h1>
            </div>
        
            <form id="update-form" action="#" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                <label for="email">Tên</label>
        
                <div class="relative">
                    <input
                    value="${product.name}"
                    name="name"
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter name"
                    />
                </div>
                </div>
        
                <div>
                <label for="password">Nhà xuất bản</label>
        
                <div class="relative">
                    <input
                    value="${product.publisher}"
                    name="publisher"
                    type="text"
                    class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                    placeholder="Enter password"
                    />
                </div>
                </div>

                <div>
                    <label for="password">Mô tả</label>
            
                    <div class="relative">
                        <textarea name="description">
                            ${product.description}
                        </textarea>
                    </div>
                </div>

                <div>
                    <label for="password">Đánh giá</label>
            
                    <div class="relative">
                        <select name="review">
                            <option ${product.review == 1 ? "selected" : ""} value="1">1</option>
                            <option ${product.review == 2 ? "selected" : ""} value="2">2</option>
                            <option ${product.review == 3 ? "selected" : ""} value="3">3</option>
                            <option ${product.review == 4 ? "selected" : ""} value="4">4</option>
                            <option ${product.review == 5 ? "selected" : ""} value="5">5</option>
                        </select>
                    </div>
                </div>
        
                <div class="flex items-center justify-between">
                    <button
                        type="submit"
                        class="inline-block rounded-lg bg-blue-500 px-5 py-3 text-sm font-medium text-white"
                    >
                        Cập nhật
                    </button>
                </div>
            </form>
            </div>
        
            <div class="relative h-64 w-full sm:h-96 lg:h-full lg:w-1/2">
            <img
                alt=""
                src="https://images.unsplash.com/photo-1630450202872-e0829c9d6172?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774&q=80"
                class="absolute inset-0 h-full w-full object-cover"
            />
            </div>
        </section>
    `
}

export default Detail;