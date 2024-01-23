const Book = function (book) {
    return `    
    <a href="/book/${book.id}" class="block">
        <img
            alt="Art"
            src="${book.images[0].base_url}"
            class="h-64 w-full object-cover sm:h-80 lg:h-96"
        />

        <h3 class="mt-4 text-lg font-bold text-gray-900 sm:text-xl">Lorem, ipsum dolor.</h3>

        <p class="mt-2 max-w-sm text-gray-700">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magni reiciendis sequi ipsam incidunt.
        </p>
    </a>
`
}

export default Book;