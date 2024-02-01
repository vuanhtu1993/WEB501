import { useEffect, useState } from "../ultilities";
import { isEmpty } from 'lodash'

const UpdateBook = function (id) {
    const [book, setBook] = useState({})

    useEffect(function () {
        fetch("http://localhost:3000/books/" + id)
            .then((res) => res.json())
            .then(data => setBook(data))
    }, [])

    if (isEmpty(book)) {
        return /*html*/`
        <button type="button" class="bg-indigo-500 ..." disabled>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
            </svg>
            Processing...
        </button>
        `
    }

    return /*html*/`
<section class="bg-gray-100">
    <div class="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
    <div class="grid grid-cols-1 gap-x-16 gap-y-8 lg:grid-cols-5">
        <div class="lg:col-span-2 lg:py-12">
            <img src="${book.images?.[0].base_url}"/>
        </div>

        <div class="rounded-lg bg-white p-8 shadow-lg lg:col-span-3 lg:p-12">
        <form action="" class="space-y-4">
            <div>
            <label class="sr-only" for="name">Name</label>
            <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Name"
                type="text"
                id="name"
                value="${book.name || ""}"
            />
            </div>

            <div class="grid grid-cols-1 gap-4 sm:grid-cols-2">
            <div>
                <label class="sr-only" for="email">Email</label>
                <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Email address"
                type="email"
                id="email"
                />
            </div>

            <div>
                <label class="sr-only" for="phone">Phone</label>
                <input
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Phone Number"
                type="tel"
                id="phone"
                />
            </div>
            </div>

            <div class="grid grid-cols-1 gap-4 text-center sm:grid-cols-3">
            <div>
                <input class="peer sr-only" id="option1" type="radio" tabindex="-1" name="option" />

                <label
                for="option1"
                class="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
                >
                <span class="text-sm"> Option 1 </span>
                </label>
            </div>

            <div>
                <input class="peer sr-only" id="option2" type="radio" tabindex="-1" name="option" />

                <label
                for="option2"
                class="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
                >
                <span class="text-sm"> Option 2 </span>
                </label>
            </div>

            <div>
                <input class="peer sr-only" id="option3" type="radio" tabindex="-1" name="option" />

                <label
                for="option3"
                class="block w-full rounded-lg border border-gray-200 p-3 text-gray-600 hover:border-black peer-checked:border-black peer-checked:bg-black peer-checked:text-white"
                tabindex="0"
                >
                <span class="text-sm"> Option 3 </span>
                </label>
            </div>
            </div>

            <div>
            <label class="sr-only" for="message">Message</label>

            <textarea
                class="w-full rounded-lg border-gray-200 p-3 text-sm"
                placeholder="Message"
                rows="8"
                id="message"
            ></textarea>
            </div>

            <div class="mt-4">
            <button
                type="submit"
                class="inline-block w-full rounded-lg bg-black px-5 py-3 font-medium text-white sm:w-auto"
            >
                Send Enquiry
            </button>
            </div>
        </form>
        </div>
    </div>
    </div>
</section>
    `
}
export default UpdateBook;