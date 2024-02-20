import { useEffect, useState } from "../ultilities"
import { isEmpty } from 'lodash'

const UpdateBook = function (id) {
    // Bước 1: tạo state để lưu dữ liệu
    const [book, setBook] = useState({})
    // Bước 2: Thực hiện xử lý bất đồng bộ
    useEffect(function () {
        fetch("http://localhost:3000/books/" + id)
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])

    useEffect(function () {
        const updateBtn = document.querySelector("#update-btn")
        // console.log(updateBtn)
        updateBtn.onclick = function (e) {
            e.preventDefault()
            handleUpdateBook()
        }
    })

    if (isEmpty(book)) {
        return /*html*/`
        <div
        class="inline-block h-8 w-8 animate-spin rounded-full border-4 border-solid border-current border-r-transparent align-[-0.125em] motion-reduce:animate-[spin_1.5s_linear_infinite]"
        role="status">
            <span
            class="!absolute !-m-px !h-px !w-px !overflow-hidden !whitespace-nowrap !border-0 !p-0 ![clip:rect(0,0,0,0)]">
            Loading...</span>
        </div>
        `
    }

    const handleUpdateBook = function () {
        const formData = new FormData(document.querySelector("#update-form"))
        // console.log(formData.get("name"));
        const data = {
            name: formData.get("name")
        }
        fetch("http://localhost:3000/books/" + id, {
            method: "PATCH",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(data)
        })

    }

    return /*html*/`
        <section class="relative flex flex-wrap lg:h-screen lg:items-center">
            <div class="w-full px-4 py-12 sm:px-6 sm:py-16 lg:w-1/2 lg:px-8 lg:py-24">
                <div class="mx-auto max-w-lg text-center">
                <h1 class="text-2xl font-bold sm:text-3xl">Chi tiết sách ${book.name}</h1>

                <p class="mt-4 text-gray-500">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Et libero nulla eaque error neque
                    ipsa culpa autem, at itaque nostrum!
                </p>
                </div>

                <form id="update-form" action="" class="mx-auto mb-0 mt-8 max-w-md space-y-4">
                <div>
                    <label for="email" class="sr-only">Name</label>
                    <div class="relative">
                    <input
                        type="text"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter email"
                        value="${book.name}"
                        name="name"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                        />
                        </svg>
                    </span>
                    </div>
                </div>

                <div>
                    <label for="password" class="sr-only">Password</label>

                    <div class="relative">
                    <input
                        type="password"
                        class="w-full rounded-lg border-gray-200 p-4 pe-12 text-sm shadow-sm"
                        placeholder="Enter password"
                    />

                    <span class="absolute inset-y-0 end-0 grid place-content-center px-4">
                        <svg
                        xmlns="http://www.w3.org/2000/svg"
                        class="h-4 w-4 text-gray-400"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        >
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                        <path
                            stroke-linecap="round"
                            stroke-linejoin="round"
                            stroke-width="2"
                            d="M2.458 12C3.732 7.943 7.523 5 12 5c4.478 0 8.268 2.943 9.542 7-1.274 4.057-5.064 7-9.542 7-4.477 0-8.268-2.943-9.542-7z"
                        />
                        </svg>
                    </span>
                    </div>
                </div>

                <div class="flex items-center justify-between">
                    <button
                    id="update-btn"
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
                alt="Welcome"
                src="${book.images?.[0].base_url}"
                class="absolute inset-0 h-full w-full object-cover"
                />
            </div>
        </section>
    
    `
}

export default UpdateBook