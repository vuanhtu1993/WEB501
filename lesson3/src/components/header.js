const Header = function () {
  // Backticks - string interpolation
  return `
      <header class="bg-blue-500">
        <div class="container mx-auto flex items-center">
          <img width="100px" src="/logo.png"/>
          <div class="flex grow">
            <input class="w-full h-12" placeholder="Tìm kiếm"/>
            <button class="w-24 flex bg-[#0D5CB6] text-white">
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-4">
                <path stroke-linecap="round" stroke-linejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
              </svg>
              Tìm kiếm
            </button>
          </div>
        </div>
      </header>
    `
}

export default Header