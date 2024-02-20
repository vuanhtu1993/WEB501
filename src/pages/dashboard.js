import { useState, useEffect } from "../lib"

const Dashboard = () => {
    const [products, setProducts] = useState([])
    useEffect(function () {
        fetch("http://localhost:3000/products")
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    console.log(products);
    return `
        <div class="overflow-x-auto">
        <table class="min-w-full divide-y-2 divide-gray-200 bg-white text-sm">
            <thead class="ltr:text-left rtl:text-right">
            <tr>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Tên</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Giá</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Mô tả</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">Nhà xuất bản</th>
                <th class="whitespace-nowrap px-4 py-2 font-medium text-gray-900">
                    Thao tác
                </th>
            </tr>
            </thead>

            <tbody class="divide-y divide-gray-200">
                ${products.map(function (p) {
        return `
                    <tr>
                        <td class="px-4 py-2 font-medium text-gray-900">${p.name}</td>
                        <td class="px-4 py-2 text-gray-700">${p.price}</td>
                        <td class="px-4 py-2 text-gray-700">${p.description}</td>
                        <td class="px-4 py-2 text-gray-700">${p.publisher}</td>
                        <td class="px-4 py-2 text-gray-700">
                            <a href="/detail/${p.id}"
                                class="inline-block rounded bg-indigo-600 px-4 py-2 text-xs font-medium text-white hover:bg-indigo-700"
                            >
                                View
                            </a>
                        </td>
                    </tr>
                    `
    })}
            </tbody>
        </table>
        </div>
    `
}

export default Dashboard