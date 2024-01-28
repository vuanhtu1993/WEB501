import { useEffect, useState } from "../ultilities";

const Dashboard = function () {
    const [books, setBooks] = useState([])
    // fetch
    useEffect(function () {
        fetch("http://localhost:3000/books")
            .then(function (response) {
                return response.json()
            })
            .then(function (data) {
                // console.log(data);
                setBooks(data)
            })
    }, [])

    return /*html*/`
        <h1 class="text-xl">Dashboard</h1>

        <div class="">
            <table class="w-full bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
                <tr>
                    <th class="w-[5%] px-4 py-2 font-medium text-gray-900">STT</th>
                    <th class="w-[25%] px-4 py-2 font-medium text-gray-900">Name</th>
                    <th class="w-[30%] px-4 py-2 font-medium text-gray-900">Mô tả ngắn</th>
                    <th class="w-[10%] px-4 py-2 font-medium text-gray-900">Giá</th>
                    <th class="w-[20%] px-4 py-2 font-medium text-gray-900">Ảnh</th>
                    <th class="w-[10%] px-4 py-2"></th>
                </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                ${books.map((book, index) => /*html*/`
                    <tr>
                        <td class="px-4 py-2 font-medium text-gray-900">${index + 1}</td>
                        <td class="px-4 py-2 text-gray-700">${book.name}</td>
                        <td class="px-4 py-2 text-gray-700">${book.short_description}</td>
                        <td class="px-4 py-2 text-gray-700">${book.list_price}</td>
                        <td class="px-4 py-2 text-gray-700">
                            <img src="${book.images[0].base_url}"/>
                        </td>
                        <td class="whitespace-nowrap px-4 py-2">
                            <a
                            href="#"
                            class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                            View
                            </a>
                        </td>
                    </tr>
                `).join("")}
            </tbody>
            </table>
        </div>
    `
}

export default Dashboard