import { useEffect, useState } from "../../lib";

const Dashboard = function() {
    // Bước 1: tạo state
    const [books, setBooks] = useState([])
    // Buoc 2: FetchAPI
    // side effect
    // Refactor code
    const fetchBooks = function() {
        fetch('http://localhost:3000/books')
        .then((res) => res.json())
        .then((data) => setBooks(data))
    }
    useEffect(function() {
        fetchBooks()
    }, [])

    // Event
    useEffect(function() {
        const btnDels = document.querySelectorAll(".delete-btn")
        console.log(btnDels);
        btnDels.forEach(function(btnDel) {
            btnDel.addEventListener('click', function(event) {
                const id = btnDel.dataset.id
                if (id) {
                    const cf = confirm("Chắc chắn chưa")
                    if (cf) {
                        fetch('http://localhost:3000/books/' + id, {
                            method: "DELETE"
                        }).then(() => {
                            alert("Xoá sản phẩm thành công")
                            fetchBooks()
                        })
                    }
                }
                
            })
        })
    })
    return /*html*/`
    <h1>Dashboard</h1>

    <div class="">
    <table class="bg-white text-sm">
        <tr>
            <th class="w-[20%]  px-4 py-2 font-medium text-gray-900">
                Name
            </th>
            <th class="w-[30%] px-4 py-2 font-medium text-gray-900">
                Short description
            </th>
            <th class="w-[10%] px-4 py-2 font-medium text-gray-900">
                Gía
            </th>
            <th class="w-[30%] px-4 py-2 font-medium text-gray-900">
                Image
            </th>
            <th class="w-[10%] px-4 py-2"></th>
        </tr>

        <tbody class="divide-y divide-gray-200">
        ${books.map(function(book) {
            return /*html*/`
            <tr>
                <td class="px-4 py-2 font-medium text-gray-900">
                    ${book.name}
                </td>
                <td class="px-4 py-2 text-gray-700">${book.short_description}</td>
                <td class="px-4 py-2 text-gray-700">${book.list_price}</td>
                <td class="px-4 py-2 text-gray-700">
                    <img src="${book.images?.[0]}"/>
                </td>
                <td class="px-4 py-2">
                    <a href="/admin/book/${book.id}" class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700">
                        Update
                    </a>
                    <button data-id="${book.id}" class="delete-btn inline-block rounded bg-red-500 px-4 py-2 text-xs font-medium text-white">
                        Delete
                    </button>
                </td>
            </tr>
            `
        }).join("")}
        </tbody>
    </table>
    </div>    
    `
}

export default Dashboard;